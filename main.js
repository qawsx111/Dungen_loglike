const board = document.getElementById('screen');
const ctx = board.getContext('2d');

const msgBox = document.getElementById('msgBox');

var calculate = {

    sum : (x, y) => {
        return x + y;
    },
    
    intRandom : (min, max) => {
        return Math.floor(Math.random() * (max - min) + 1) + min
    },
    
    floatRandom : (min, max) => {
        return (Math.random() * max) + min;
    },
    
    boolRandom : (percent) => {
        let bool = floatRandom(0, 100) < percent ? true : false;
        return bool;
    }

}

var settings = {
	NowX : null,
	NowY : null,
	worldMapCellX : 80,
	worldMapCellY : 50

}

var MapDatas = {
	"grass" : { color : "green"},
	"select" : { color : "blue"}

}

class WorldMap {
	
	Map = [];
	WorldMapX = 18;
	WorldMapY = 9;
	Status = "grass";
	
	CreateMapData(){
		for(let y = 0; y < this.WorldMapY; y++){
			this.Map[y] = [];
		for(let x = 0; x < this.WorldMapX; x++){
			this.Map[y][x] = 0;
		}
		}
	}
	
	CheckMapData() {
		console.log(this.Map);
	}
	
	Draw() {
		board.setAttribute('width', this.WorldMapX * settings.worldMapCellX);
		board.setAttribute('height', this.WorldMapY * settings.worldMapCellY);
		settings.NowX = this.WorldMapX * settings.worldMapCellX;
		settings.NowY = this.WorldMapY * settings.worldMapCellY;

		for(let y = 0; y < this.WorldMapY; y++){
		for(let x = 0; x < this.WorldMapX; x++){
			let cellX = x * settings.worldMapCellX;
			let cellY = y * settings.worldMapCellY;
			ctx.strokeRect(cellX, cellY, settings.worldMapCellX, settings.worldMapCellY);
			ctx.fillStyle = MapDatas[this.Status].color;
			ctx.fillRect(cellX, cellY, settings.worldMapCellX, settings.worldMapCellY);
		}
		}

	}
	
}

class Character {
	
	
}

class Msg {
	
	Box = msgBox;
	msg = "";

	Show() {
		this.Box.setAttribute('width', settings.NowX);
		this.Box.setAttribute('height', settings.NowX);
		this.Box.innerText = msg;
	}


}


var map = new WorldMap();
map.CreateMapData();
map.Draw();












