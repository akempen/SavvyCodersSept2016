var Warrior = function( name, weapon ){
    this.name = name;
    this.weapon = weapon;
};

Warrior.prototype.attack = function( target ){
    return this.name + " attacks " + target + " with his " + this.weapon
};

var fred = new Warrior( "Fred", "boomerang" );

var tammy = new Warrior( "Tammy", "fingernails" );

$( "#content" ).append( fred.name + " and " + tammy.name + "<br>" );
$( "#content" ).append( fred.attack( "the king" ) );
