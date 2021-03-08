const board = document.getElementById('screen');
const ctx = board.getContext('2d');

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

var colors = {
	"stoneFloor" : "gray",
}

class CellData {
	
	data;

}

class WorldMap {
	
	Map;
	WorldMapX;
	WorldMapY;
	
	CreateMapData(){
		for(let y = 0; y < this.WorldMapY; y++){
			this.Map[y] = [];
		for(let x = 0; x < this.WorldMapX; x++){
			this.Map[y][x] = 0;
			this.Map[y][x].data = new CellData();
		}
		}
	}
	
	CheckMapData() {
		console.log(this.Map);
	}
	
	Draw() {
		for(let y = 0; y < this.WorldMapY; y++){
		for(let x = 0; x < this.WorldMapX; x++){
			atx.fillStyle = this.Map[y][x]
			atx.fillrect
		}
		}

	}
	
}














//보드 크기 조절 = board.setAttribute('width', '600');