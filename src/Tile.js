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

    setBombs()
    {
        var titles = [arguments];
        var bombs = arguments/ (Math.random()* 20);
        var i = 0;

        while (i < bombs) {
            var index = Math.random()*3;
            titles[i].hasBomb();
            i++;
        }  
    }
}