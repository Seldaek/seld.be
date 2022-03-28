---
extends: _layouts.post
section: content
title: "Random Seeds - Ordering Disorder"
date: 2008-03-13 10:28:12
description: ""
featured: false
categories: [actionscript]
---
Randomness is great, that's a fact, it's very useful in many areas of programming, and is especially good to build non-repetitive games. However in some cases, it's useful to be able to reproduce randomness.

Let's say you have a Tetris game or a puzzle that randomizes it's different elements before the game start. It might be a nice feature to offer a "Try again" button, which would allow the player to replay the exact same game, to see if he performs better. Or you may want to have two players play the same game to compete against each other, while still playing a random game.

There are two approach to this, the first and maybe the most straightforward is to log the random somewhere to be able to replay it. This works of course, but it forces you to implement the entire logging process, and it uses memory. That's not efficient.

The second approach is to use a seeded random generator. What this means is that instead of using a really random function, you provide a seed -an unique number- and with it, a sequence of random numbers will be generated. the thing here is that with a given seed, the random sequence will always be identical. So instead of logging your entire game, you just save the seed, and anyone using the same seed will see the exact same game.

Here is a test with Flash's Math.random() function, what this little script does is draw two circles with random numbers, and then copy one over the other to produce a third circle. As we can see, in this case, the two random sequences were not the same, so we see a few red dots appearing.

\[flash bgcolor="#8D8C93"\]/upload/lib/flash/random-demo2.swf\[/flash\]

This one, on the contrary, uses the seeded random class, and we see that the two circles perfectly overlap one another, the random sequence has been repeated.

\[flash bgcolor="#8D8C93"\]/upload/lib/flash/random-demo1.swf\[/flash\]

Now the problem with seeded random generators, is that there are different ways to make a random number out of a seed, and some are far more random than others. The code which I used here is an ActionScript port of the C [Mersenne Twister](http://en.wikipedia.org/wiki/Mersenne_twister) algorithm. It is as you will see very random and not too slow to process.

To check the algorithm quality, I built this third test case, which draws random dots from a seeded generator on the left, and Math.random() on the right. As you can see if you wait the end of the test, the two fill 68.83% or their area. And they are evenly distributed, you can't really see a pattern as some other seeded generators would do.

\[flash bgcolor="#8D8C93"\]/upload/lib/flash/random-demo3.swf\[/flash\]

As far as performance is concerned, using the Mersenne Twister is more or less six times slower than using Math.random() to achieve the same result. It is still very fast but you should take that into consideration if you are generating a great deal of random numbers and don't really need the seeded part. The sources include a Rand class as well, that is used exactly in the same manner as the SeededRand one, but provides numbers using Math.random(), this is two times slower than doing the math yourself but again, it's all very fast so it depends on what you need to do with it.

You can [download the sources](/code/seededrand/downloads) and [see how to use them](/code/seededrand) if you're interested, they are available under the LGPL.