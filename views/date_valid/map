function(doc) {
    if(doc.type == "bbolo_position_map" && doc.date_valid){
	   emit([doc.date_valid.year, doc.date_valid.month, doc.date_valid.day], 1);
    }
}