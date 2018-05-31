const tree = { 
	name : "home", 
	files : ["notes.txt","todo.txt"], 
	subFolders: [	
		{ name : "payroll", 
		  files : ["paper.pdf","funds.csv"], 
		  subFolders: [] 
		}, 
		{ name: "misc", 
		  files : ["summer1.jpg","summer2.jpg", "summer3.jpg"], 
		  subFolders: [
			{ name : "logs", 
			  files : ["logs1","logs2","logs3","logs4"], 
			  subFolders: [] 
		  }] 
	}] 
}; 

const find=filename => inputTree =>{
	for(file in inputTree.files){
		if(inputTree.files[file]===filename){
			return true;
		}
	}

	for(subDir in inputTree.subFolders){
		if(find(filename)(inputTree.subFolders[subDir]))
			return true;
	}
	return false;
}

console.log(find("paper.pdf")(tree)); // true 
console.log(find("randomfile")(tree)); // false
