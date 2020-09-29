	const express= require('express');
	// const params=require('params');
	const app = express();
	const port=process.env.PORT || 8900;  
	const mongo= require('mongodb');
	const MongoClient= mongo.MongoClient;
	const mongoUrl="mongodb+srv://Edureka:mongonorme@cluster0.ai373.mongodb.net/norme?retryWrites=true&w=majority";
	const cors=require('cors');
	const bodyParser = require('body-parser');
	let db;
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());	
	app.use(cors());//used for using cors


	//By restaurant ID
app.get('/restaurant/:id',(req,res)=>{
	var query={_id:req.params.id}
	db.collection('restaurant').find(query).toArray((err,result)=>{
		if(err) throw err;
		res.send(result);
	})
})



	 //listing as per the cityname
	app.get('/widget',(req,res) => {
	res.send("<div><a href='http://localhost:8900/widget/mealtype'>MealType</a><br/></div>")
	})
	app.get('/widget/mealtype',(req,res)=>{
	res.send("<div><a href='http://localhost:8900/widget/mealtype/breakfast'>BreakFast</a><br><a href='http://localhost:8900/widget/mealtype/lunch'>Lunch</a><br><a href='http://localhost:8900/widget/mealtype/dinner'>Dinner</a><br><a href='http://localhost:8900/widget/mealtype/snacks'>Snacks</a><br><a href='http://localhost:8900/widget/mealtype/drinks'>Drinks</a><br><a href='http://localhost:8900/widget/mealtype/nightlife'>Night Life</a>	")
	})




	//widget




	app.get('/widget/mealtype/breakfast',(req,res)=>{
	var query ={'type.name': 'breakfast'};
	db.collection('restaurant').find(query).toArray((err,result)=>{
		if(err) throw err;
		res.send(result);
	})
	})
		app.get('/widget/mealtype/dinner',(req,res)=>{
	var query ={'type.name': 'dinner'};
	db.collection('restaurant').find(query).toArray((err,result)=>{
		if(err) throw err;
		res.send(result);
	})
	})
		app.get('/widget/mealtype/lunch',(req,res)=>{
	var query ={'type.name': 'lunch'};
	db.collection('restaurant').find(query).toArray((err,result)=>{
		if(err) throw err;
		res.send(result);
	})
	})

	app.get('/widget/mealtype/snacks',(req,res)=>{
	var query ={'type.name': 'snacks'};
	db.collection('restaurant').find(query).toArray((err,result)=>{
		if(err) throw err;
		res.send(result);
	})
	})
		app.get('/widget/mealtype/drinks',(req,res)=>{
	var query ={'type.name': 'drinks'};
	db.collection('restaurant').find(query).toArray((err,result)=>{
		if(err) throw err;
		res.send(result);
	})
	})
		app.get('/widget/mealtype/nightlife',(req,res)=>{
	var query ={'type.name': 'nightlife'};
	db.collection('restaurant').find(query).toArray((err,result)=>{
		if(err) throw err;
		res.send(result);
	})
	})	

	app.get('/widget/:mealtype',(req,res)=>{
	var query ={'type.mealtype': req.params.mealtype};
	db.collection('restaurant').find(query).toArray((err,result)=>{
		if(err) throw err;
		res.send(result);
	})
	})


	app.get('/restaurants/:city',(req,res)=>{

		var query = {city_name:req.params.city[0].toUpperCase()+req.params.city.slice(1)};

		db.collection('restaurant').find(query).toArray((err,result)=>{
			if(err) throw err;
			res.send(result);
		})

	})
	//list information
	app.get('/restaurant',(req,res)=>{
		// var query = {city: req.params.re};
		db.collection('restaurant').find({}).toArray((err,result)=>{
			if(err) throw err;
			res.send(result);
		})

	})
	//list by city id
	app.get('/mealtype/:id',(req,res)=>{
		// console.log(req.params.id);
		var query = {_id:req.params.id};
		db.collection('mealtype').find(query).toArray((err,result)=>{
			if(err) throw err;
			res.send(result);
		})
	})
	//list of meals
	  app.get('/mealtype',(req,res)=>{
		// console.log(req.params.id);
		// var query = {_id: req.params.id};
		db.collection('mealtype').find().toArray((err,result)=>{
			if(err) throw err;
			res.send(result);
		})
	})




//AKASH HANDA's CODE

app.get('/',(req,res) => {
    res.send("<div><a href='http://localhost:8900/location'>Location</a><br/><a href='http://localhost:8900/mealtype'>MealType</a><br/><a href='http://localhost:8900/cuisine'>Cuisine</a><br/><a href='http://localhost:8900/restaurant'>Restaurant</a></div>")
})

//City List
app.get('/location',(req,res) => {
    db.collection('city').find({}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

//Meal Type
app.get('/mealtype',(req,res) => {
    db.collection('mealtype').find({}).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

//Cusine
app.get('/cuisine',(req,res) => {
    db.collection('cuisine').find({}).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

//Restaurant
app.get('/restaurant',(req,res) => {
    var query = {};
    if(req.query.city && req.query.mealtype){
        query={city:req.query.city,"type.mealtype":req.query.mealtype[0].toUpperCase()+req.query.mealtype.slice(1)}
    }
    else if(req.query.city){
        query={city:req.query.city}
    }
    else if(req.query.mealtype){
        query={"type.mealtype":req.query.mealtype}
    }
    db.collection('restaurant').find(query).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

app.get('/restaurantDetails/:id',(req,res) => {
    console.log(req.params.id)
    var query = {_id:req.params.id}
    db.collection('restaurant').find(query).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
});
//city name

app.get('/restaurants/:id',(req,res) => {
    console.log(req.params.id)
    var query = {city:req.params.id

    }
    db.collection('restaurant').find(query).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
});

app.get('/restaurant/:city',(req,res) => {
    console.log(req.params.city[0].toUpperCase()+req.params.city.slice(1))
    var query = {city_name:req.params.city[0].toUpperCase()+req.params.city.slice(1)}
    db.collection('restaurant').find(query).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
});
//order
app.get('/order',(req,res) => {
    db.collection('order').find({}).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
});


//placeorder

app.post('/placeorder',(req,res) => {
	console.log(req.body.name)   
    db.collection('order').insertOne(req.body,(err,result) => {
        if(err){
            throw err
        }else{
            res.send('Data Added!')
        }
    })
})
//Listing Page Api
	app.get('/restaurantlist/:mealtype', (req,res) => {
    var query = {"type.mealtype":req.params.mealtype};
    var sort = {cost:-1}
    if(req.query.city && req.query.sort){
        query={"type.mealtype":req.params.mealtype,"city":req.query.city}
        sort = {cost:Number(req.query.sort)}
    }else if(req.query.cuisine  && req.query.sort){
        query={"type.mealtype":req.params.mealtype,"Cuisine.cuisine":(req.query.cuisine)}
        sort = {cost:Number(req.query.sort)}
    }else if(req.query.lcost && req.query.hcost && req.query.sort){
		// console.log(req.query.lcost && req.query.hcost && req.query.sort);
        query={"type.mealtype":req.params.mealtype,"cost":{$lt:parseInt(req.query.lcost),$gt:parseInt(req.query.hcost)} }
        sort = {cost:Number(req.query.sort)}
    }else if(req.query.city){
        query={"type.mealtype":req.params.mealtype,"city":req.query.city}
    }else if(req.query.cuisine){
        query={"type.mealtype":req.params.mealtype,"Cuisine.cuisine":(req.query.cuisine)}
    }else if(req.query.lcost && req.query.hcost){
		console.log(req.query.lcost, req.query.hcost)
        query={"type.mealtype":req.params.mealtype,"cost":{$gt:parseInt(req.query.lcost),$lt:parseInt(req.query.hcost)} }
    }
    db.collection('restaurant').find(query).sort(sort).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
});

	MongoClient.connect(mongoUrl,{useNewUrlParser:true}, (err,client)=>{
		if(err) throw err;
		db= client.db('norme');
		app.listen(port , (err,result)=>{
			if(err) throw err;
			console.log(`server is running on port ${port}`);
		})
	})
