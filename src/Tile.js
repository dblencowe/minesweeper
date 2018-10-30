class Tile
{
    constructor(visibility, status)
    {
        this.visibility = visibility;
        this.status = status;
    }

    makeVisibble()
    {
        this.visibility = shown;
    }

    hid()
    {
        this.visibility = hidden;
    }

    hasBomb()
    {
        this.status = bomb;
        return true;
    }
}