# Split

Split is a one-button scrolling game where forking (splitting) nodes is your only way to avoid obstacles.

This game was built mostly for fun, but also as an entry to the [GitHub Game Off](https://github.com/blog/1303-github-game-off) contest.

You can play it at [seld.be/split/](http://seld.be/split/).

# Concept

The Game Off's only restriction was the use of one of those words in the game concept: forking, branching, cloning, pushing, pulling.

I set out to imagine a game where your only way of moving is to fork/branch out, and this is what came out of it.

![](https://dl.dropbox.com/u/1634226/split/screenshot1.png)
![](https://dl.dropbox.com/u/1634226/split/screenshot2.png)

# Projects and media files used

No external libs are used for the core of the game. The game is simple enough that it does not require (and also does not really fit) the use of a game engine to render elements or track the game logic. I figured one can handle this with the browser APIs alone these days, plus it was a good learning exercise.

For audio playback the game uses [SoundManager2](http://www.schillmania.com/projects/soundmanager2/) and the following CC-BY / CC-BY-NC licensed audio files:

- soundtrack ([Black Hole](http://www.jamendo.com/en/track/135925/black-hole))
- split sound ([laserzips](http://www.freesound.org/people/bennychico11/sounds/125111/))
- collision sound ([electric-wire-20](http://www.freesound.org/people/Glaneur%20de%20sons/sounds/34169/))

The music icon is CC-BY licensed from [Dmitry Baranovskiy of The Noun Project](http://thenounproject.com/noun/music/#icon-No5029).

# Author

This has been conceived and put together by [Jordi Boggiano](http://seld.be/) ([@seldaek](https://twitter.com/seldaek)).

[Meret Vollenweider](http://meret.com) kindly helped with the game graphics.

# License

The code is released under the GPLv3, see the LICENSE file for details.
