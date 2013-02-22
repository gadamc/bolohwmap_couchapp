function (doc) {
      if(doc.type == 'bbolo_position_map'){
	  for (var key in doc) {
	      emit( [key, doc[key]] , 1);        
	  }
      }
    }