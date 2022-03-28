---
extends: _layouts.post
section: content
title: "Multiton base class"
date: 2008-12-23 01:40:00
description: ""
featured: false
categories: [php]
---
While I like the [Singleton](http://en.wikipedia.org/wiki/Singleton_pattern) pattern every now and then, I prefer the flexibility that the [Multiton](http://en.wikipedia.org/wiki/Multiton) potentially offers, and well it's just an extended version of the Singleton, so it's "compatible" with the Singleton model.

Anyway, to the point, PHP5.3 is coming, and with Late Static Binding you can do a base Multiton (or Singleton if you insist), which wasn't possible before. Now I like this very much because you can simply extend it rather than rewriting those (few, I know, but still) lines each time.

 \[code php\] <?php class Multiton 
{ 
    protected static $instances; 
    
    final protected function __construct() {} 
    
    public static function getInstance($id = '') 
    { 
        $class = get_called_class(); 
        if (!isset(self::$instances[$class][$id])) { 
            self::$instances[$class][$id] = new $class; 
        } 
        return self::$instances[$class][$id]; 
    } 
    
    public static function initInstance($id, $object) 
    { 
        $class = get_called_class(); 
        self::$instances[$class][$id] = $object; 
    } 
}
[/code]
<p?>
So, this class features the getInstance() method, and an initInstance() method that can be used to inject a specific instance of a different class, for unit testing requirements for example. It might be bad practice though, I'm not sure and can't find Sebastian "PHPUnit" Bergmann on irc at the moment, so please yell at me if you think this is stupid. And now here's some example code and output to prove that it works, although I could have faked it..

 \[code\] <?php class Test extends Multiton 
{ 
} 
  
$a = Multiton::getInstance(); 
$a-?>
foo = 'bar'; $b = Test::getInstance(); // you can use it as a Singleton $b-&gt;foo = 'baz'; $c = Test::getInstance('foo'); // or as a Multiton with an id for each object $c-&gt;foo = 'qux'; var\_dump($a,$b,$c); /\* outputs : object(Multiton)#1 (1) { \["foo"\]=&gt; string(3) "bar" } object(Test)#2 (1) { \["foo"\]=&gt; string(3) "baz" } object(Test)#3 (1) { \["foo"\]=&gt; string(3) "qux" } \*/ // instantiation fails correctly.. nothing new there new Test(); // Fatal error: Call to private Multiton::\_\_construct() from invalid context \[/code\] So this is not life changing I guess, but it's one more reason to switch to 5.3 once it is available.