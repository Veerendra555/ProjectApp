function feedback(ele) {
	 if(ele.value=='yes')
	 {
     document.getElementById('ctext').placeholder="Enter your problem here...";
	 }
	 else
	 {
      document.getElementById('ctext').placeholder="Enter your feedback here";
	 }
}