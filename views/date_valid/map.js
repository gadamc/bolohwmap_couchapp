function(doc) {
    if(doc.type == "bbolo_position_map" && doc.date_valid && doc.date_valid.year &&
      doc.date_valid.month && doc.date_valid.day && !doc.date_valid.hour){
	   emit([doc.date_valid.year, doc.date_valid.month, doc.date_valid.day, 0, 0], 1);
    }

    if(doc.type == "bbolo_position_map" && doc.date_valid && doc.date_valid.year && 
      doc.date_valid.month && doc.date_valid.day && doc.date_valid.hour && doc.date_valid.minute){
     emit([doc.date_valid.year, doc.date_valid.month, doc.date_valid.day, doc.date_valid.hour, doc.date_valid.minute], 1);
    }

}