function(doc) {
    if(doc.type == "bbolo_position_map" && doc.bolometer){
	   emit(doc.bolometer, 1);
    }
}