class WorldMap {
	
	Map;
	WorldMapX;
	WorldMapY;
	
	Arr_CreateMapData(){
		this.Map = Array.from({length : 3}, () => Array(this.WorldMapY).fill(0));
	}
	
	Ftn_CheckMapData() {
		console.log(this.Map);
	}
	
}

export{ WorldMap };