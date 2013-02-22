function(doc) {
    if(doc.type == "bbolo_position_map" && doc.bolometer && isArray(doc.channels) && doc.date_valid && doc.date_valid.year &&
      doc.date_valid.month && doc.date_valid.day && doc.date_valid.hour === undefined){
      for (var chan in doc.channels) {
	     emit([doc.date_valid.year, doc.date_valid.month, doc.date_valid.day, 0, 0, doc['channels'][chan] + " " + doc.bolometer ], 1);
      }
    }

    if(doc.type == "bbolo_position_map" && doc.bolometer && isArray(doc.channels) && doc.date_valid && doc.date_valid.year && 
      doc.date_valid.month && doc.date_valid.day && doc.date_valid.hour && doc.date_valid.minute){
      for (var chan in doc.channels) {
        emit([doc.date_valid.year, doc.date_valid.month, doc.date_valid.day, doc.date_valid.hour, doc.date_valid.minute, doc['channels'][chan] + " " + doc.bolometer ], 1);
      }
    }

}