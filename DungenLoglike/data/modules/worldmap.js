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

export { WorldMap }