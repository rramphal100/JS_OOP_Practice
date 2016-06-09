function Person(Name, Age, Height, Weight){
	this.Name = Name;
	this.Age = Age;
	this.Height = Height;
	this.Weight = Weight;
	this.Print = function(){
		console.log(this.Name + " " + this.Age + " " + this.Height +
			" " + this.Weight);
	}
}

function list_all(obj){
	var out = "";
	for(var x in obj){
		out = out + (x + ": " + obj[x]) + ", ";
	}
	out = out + "\n";
	return out;
}

var p1 = new Person("Ryan Ramphal", 22, 76, 220);

list_all(p1);

function Multiplier(){
	var number = 1;
	this.multiply = function(num){
		number = number * num;
		return number;
	}
	this.getCurrentValue = function(){
		return number;
	}
}

var m1 = new Multiplier();
console.log(m1.getCurrentValue());
console.log(m1.multiply(4));
console.log(m1.multiply(6));
console.log(m1.getCurrentValue());

function Photo(Name, Loc){
	this.Name = Name;
	this.Loc = Loc;
}

var Album = {
	photos: [],
	addPhoto: function(photo){
		this.photos.push(photo);
	},
	getPhoto: function(num){
		return list_all(this.photos[num-1]);
	},
	listPhotos: function(){
		var out = "";
		for(photo in this.photos){
			out = out + list_all(this.photos[photo]);
			out = out + "\n";
		}
		return out;
	}
}

Album.addPhoto(new Photo("p1.jpg", "root"));
Album.addPhoto(new Photo("p2.jpg", "root/Desktop"));

console.log(Album.getPhoto(2));
console.log(Album.listPhotos());

function Teacher(classname){
	this.classname = classname;
	Person.apply(this, arguments);
}

Teacher.prototype = new Person();

var t1 = new Teacher("Image Processing", "Dr. Phillips", 71, 55, 90);
console.log(list_all(t1));

function Student(friends){
	this.friends = friends;
	Person.apply(this, arguments);
}

Student.prototype = new Person();

var s1 = new Student("Leester, Radesh, Stacy", "Ryan Ramphal", 22, 76, 220);
console.log(list_all(s1));

function School(){
	this.people = [];
	this.insert = function(ppl){
		this.people.push(ppl);
	}
}

var school = new School();
school.insert(t1);
school.insert(s1);