---
extends: _layouts.post
section: content
title: "Switching on my WLAN with my phone"
date: 2010-09-22 20:04:48
description: "It all started when my router began to crash every few days. All my connections would drop, and misery ensued. I disabled WLAN/Wi-Fi and it stopped crashing, so I was happy. But then my laptop's range became limited, and my phone sucked up my precious data plan, which wasn't ideal either. Now the router I got is quite specific, it's remote controll..."
featured: false
categories: [php]
---
It all started when my router began to crash every few days. All my connections would drop, and misery ensued. I disabled WLAN/Wi-Fi and it stopped crashing, so I was happy. But then my laptop's range became limited, and my phone sucked up my precious data plan, which wasn't ideal either.

Now the router I got is quite specific, it's remote controlled by the ISP and some settings are accessible only via their web interface, which means that enabling/disabling WLAN takes 3 minutes of waiting and is very annoying. I recently got fed up and decided to try and script the whole process.

I wrote a php script that does the job with curl, and now I can call it from my phone's browser to enable or disable the WLAN at any time, from anywhere.

So if you are interested, although it will only work as-is for Swisscom routers in Switzerland, I attached the full script I used below. You can read on for hints though since I guess it could be applicable to any other router configured via a web interface, and if it's only accessible from the local network you could have the script run on a home server that is accessible from the outside and would basically be a proxy.

A few parts are noteworthy though, the whole CURL configuration was a bit tricky, especially since I failed to RTFM correctly on the whole COOKIE stuff, until [Elazar](http://matthewturland.com/) (you can buy his book on web scraping for more details on this whole topic) pointed me to the right setting, CURLOPT\_COOKIEJAR.

An interesting thing is that you can pass 'php://memory' to the COOKIEJAR option, which is a [php stream](http://php.net/manual/en/wrappers.php.php) creating a virtual file somewhere in memory. It's good for throw-away stuff if you don't want to mess with the filesystem. Also CURLOPT\_SSL\_VERIFYPEER is a very good thing to have if you want to be lazy about SSL setup, it basically skips the entire certificate verification process.

And for people trying to implementing this kind of stuff with other routers, most of them use HTTP Authentication, so you most likely will need the CURLOPT\_USERPWD option, providing it your user/pass couple as: "username:password".

 \[code php\] <?php $user = 'foo';
$pass = 'bar';
$state = isset($_GET['state']) ? $_GET['state'] : false;

if ($state !== 'on' && $state !== 'off') {
    die('Unknown or missing state '.$state);
}

function execRequest($ch)
{
    $res = curl_exec($ch);
    if (!$res) {
        var_dump(curl_error($ch));
        die('ABORTED');
    }
    return $res;
}

$ch = curl_init();
curl_setopt_array($ch, array(
    // base curl config
    CURLOPT_AUTOREFERER =?>
 true, CURLOPT\_FOLLOWLOCATION =&gt; true, CURLOPT\_RETURNTRANSFER =&gt; true, CURLOPT\_SSL\_VERIFYPEER =&gt; false, CURLOPT\_UNRESTRICTED\_AUTH =&gt; true, CURLOPT\_COOKIEJAR =&gt; 'php://memory', // login request CURLOPT\_URL =&gt; 'https://sam.sso.bluewin.ch/my/data/MyData?lang=en', CURLOPT\_POST =&gt; true, CURLOPT\_POSTFIELDS =&gt; http\_build\_query(array('username' =&gt; $user, 'password' =&gt; $pass)), )); execRequest($ch); curl\_setopt\_array($ch, array( CURLOPT\_URL =&gt; 'https://sam.sso.bluewin.ch/my/data/ModemMgmtService?lang=en&amp;mode=overview', CURLOPT\_POSTFIELDS =&gt; null, CURLOPT\_HTTPGET =&gt; true, )); execRequest($ch); sleep(3); curl\_setopt($ch, CURLOPT\_URL, 'https://sam.sso.bluewin.ch/my/data/ModemMgmtService?lang=en&amp;mode=changewlanstatus&amp;WLAN\_STATE='.$state); $res = execRequest($ch); echo strstr($res, 'Confirmation: WLAN data have been changed.') ? 'Done ('.$state.')' : 'FAILED'; \[/code\]