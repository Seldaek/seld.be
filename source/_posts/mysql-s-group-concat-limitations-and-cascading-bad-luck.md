---
extends: _layouts.post
section: content
title: "MySQL's GROUP_CONCAT limitations and cascading bad luck"
date: 2015-08-11 16:36:50
description: "We had an incident today over at Teamup (where I have worked for the last 9 months by the way:) which is worth a quick blog post if it helps save anyone from having a bad day. We are using MySQL's GROUP_CONCAT feature to fetch a list of ids to delete when cleaning up old demo calendars. You end up with a list of ids in one row it's easy to fetch, s..."
featured: false
categories: [php, web]
---
We had an incident today over at [Teamup](http://www.teamup.com/) (where I have worked for the last 9 months by the way:) which is worth a quick blog post if it helps save anyone from having a bad day.

We are using MySQL's [GROUP\_CONCAT](https://dev.mysql.com/doc/refman/5.6/en/group-by-functions.html#function_group-concat) feature to fetch a list of ids to delete when cleaning up old demo calendars. You end up with a list of ids in one row, easy to fetch, split it on commas, and done. So far so good. Then we run a few `DELETE ... WHERE id IN (...)` queries to clean things up in a few tables. So far so good.

However if you fail to read the fine print on the MySQL docs, you might not have seen this sentence: *The result is truncated to the maximum length that is given by the group\_concat\_max\_len system variable, which has a default value of 1024.* What this means is that a query that worked just fine in testing conditions, suddenly started failing in production once the data set hit a critical size. Thanks to another stroke of bad luck, it returned a list of ids truncated right after a comma (`3,4,5,`) so we had an empty id in our `WHERE IN (3,4,5,)` clause. Unfortunately combined with the fact we had optional relations in some tables (I won't bore you with details) that empty match made it wipe about 60% of the data in those.

Thankfully we have backups on top of the DB replication which let us recover the lost data pretty quickly, and it only affected a small feature in the grand scale of things, but this could have ended much worse so it is worth pointing out a few things:

- If you use GROUP\_CONCAT and expect large amounts of data returned, make sure to increase the limit before executing your query. For example this sets both the [max length for the group concat](https://dev.mysql.com/doc/refman/5.6/en/server-system-variables.html#sysvar_group_concat_max_len) and the [max packet length](https://dev.mysql.com/doc/refman/5.6/en/server-system-variables.html#sysvar_max_allowed_packet) (which caps the former) to 10MB `SET SESSION group_concat_max_len = 10485760, SESSION  max_allowed_packet = 10485760;`. Use more if you think you need more.
- Maybe for safety using GROUP\_CONCAT should be avoided if you don't know how much data to expect, simply fetching ids and then fetching all rows at the program level does the job too.
- Do snapshot backups even if you have replication in place, it can save your ass!
 
And now to hope for a more quiet rest of the week!

Edit: There is some good news, MySQL 5.8 might include a fix and turn the current warning for truncation into an error, see <http://bugs.mysql.com/bug.php?id=78041>