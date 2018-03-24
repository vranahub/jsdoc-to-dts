'use strict';

/**
 * Enum for tri-state values.
 * @readonly
 * @enum {number}
 */
var triState = {
    /** The true value */
    TRUE: 1,
    FALSE: -1,
    /** @type {boolean} */
    MAYBE: true
};

/**
 * @this OtherThing
 */
function doStuff() {}


/**
 * @class
 * @abstract
 */
class OtherThing {}

/**
 * @class
 * @extends OtherThing
 * @mixes Stuff
 * @mixes Things
 * @implements FinalThing
 */
class MyThing extends OtherThing
{
    /**
     * Constructs!
     * @param {number|string} a - The number.
     */
    constructor(a)
    {
        super();

        /**
         * Derp or something.
         *
         * @member {string}
         * @readonly
         */
        this.derp = 'me';
    }

    /**
     * Creates a new thing.
     *
     * @return {MyThing} the new thing.
     */
    static create()
    {
        return new MyThing();
    }

    /**
     * @param {OtherThing} other - To copy from.
     * @override
     */
    copy(other)
    {
        this.derp = other.toString();
    }

    /**
     * Gets derp.
     *
     * @member {string}
     */
    get D() { return this.derp; }

    /**
     * Sets derp
     *
     * @param {string} v - The value to set to.
     */
    set D(v) { this.derp = v; }
}
