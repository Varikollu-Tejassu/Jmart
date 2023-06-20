const express = require('express');
const mysql = require('mysql')
const cors = require('cors');
const { message } = require('statuses');
const app = express();
app.use(express.json());


app.use(cors({origin: true, credentials: true}))
const Localstorage= require('node-localstorage');
// 


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"jmart"
})
db.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + db.threadId);
  });


app.get('/',(req,res)=>{
    return res.json("from backend kk side");
})
app.post('/register',async(req,res)=>{
     try{
    const usertype = req.body.usertype;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
   
    db.query("INSERT INTO customers (usertype,firstname,lastname,email,password) VALUES (?,?,?,?,?)",[usertype,firstname,lastname,email,password],
    (err, data) => {
        if (err) throw err;       
       
        console.log(data);
        // res.send('Post added...');
        return res.json({data:data, message: 'successfully created'})
    

    });
     }catch(err){
        alert("not registered")
     }

});



app.post('/login', (req,res)=>{
    try{
    const sql="SELECT * FROM customers WHERE usertype=? AND email=? AND password = ?";
    
    db.query(sql,[req.body.usertype,req.body.lemail,req.body.lpassword],(err,data) => {
        if(err) return alert("Login failed");
        if(data.length>0){
            console.log(data);
         

           return res.json({data:data, message: 'Login successfull'})
        }else{
            
            return res.send({message:"no record found"});
            

        }
    })
}catch(err){
    alert("no login details found");
}
})

    app.get('/fruits',(req,res)=>{
        db.query("SELECT * FROM products WHERE category='fruits'",
            (err, result) => {
                if (err) throw err;
                console.log(result);
        
            
                return res.json(result);
            }
        
            );
        });

    app.get('/vegetables',(req,res)=>{
        db.query("SELECT * FROM products WHERE category='vegetables'",
            (err, result) => {
                if (err) throw err;
                console.log(result);
                 return res.json(result);
            }
        
            );
        });


    app.get('/softdrinks',(req,res)=>{
        db.query("SELECT * FROM products WHERE category='softdrinks'",
            (err, result) => {
                if (err) throw err;
                console.log(result);
            
                
                    return res.json(result);
            }
        
            );
        });
        
    app.get('/snacks',(req,res)=>{
        db.query("SELECT * FROM products WHERE category='snacks'",
            (err, result) => {
                if (err) throw err;
                console.log(result);
                    return res.json(result);
            }
        
            );
        });




    app.get('/customers',(req,res)=>{
        db.query("SELECT firstname,lastname,email FROM customers  WHERE usertype='user'",
            (err, result) => {
                if (err) throw err;
                console.log(result);
                return res.json(result);
            }
        
            );
        });

    app.post('/addproduct',async(req,res)=>{
        const category = req.body.category;
        const productname = req.body.productname;
        const price = req.body.price;
        const units = req.body.units;
        const file = req.body.file;
        // const formData = new FormData();
        // formData.append("file", file);
        
        db.query("INSERT INTO products (category,productname,price,units,file) VALUES (?,?,?,?,?)",[category,productname,price,units,file],
        (err, data) => {
            if (err) throw err;       
            
            console.log(data);
            // res.send('Post added...');
            return res.json({data:data, message: 'successfully created'})
        
    
        });
    });
        
    app.get('/products',(req,res)=>{
        db.query("SELECT category,productname,price,units from products group by category,productname order by category ",
            (err, result) => {
                if (err) throw err;
                console.log(result);
                return res.json(result);
            }
        
            );
        });

        app.delete('products/:productname',(req,res)=>{
            let productname=req.params.productname;
            console.log(productname)
            db.query('DELETE FROM products WHERE `productname`=?',[productname],(err,result)=>{
                if(err) throw err;
                console.log(err);
                console.log(result);
                return res.json(result);
            })
            
        
        })


        app.post('/placeorder',async(req,res)=>{
            const email = req.body.email;
            const productlist = req.body.productlist;
            const ordertotal = req.body.ordertotal;
           
           
           
            db.query("INSERT INTO orders (email,productlist,ordertotal) VALUES (?,?,?)",[email,productlist,ordertotal],
            (err, data) => {
                if (err) throw err;       
               
                console.log(data);
                // res.send('Post added...');
                return res.json({data:data, message: 'successfully placed'})
            
        
            });
        });
        
        let orders = []
        app.get('/orders',(req,res)=>{
            db.query("SELECT * from orders ",
                (err, result) => {
                    if (err) throw err;
                    console.log(result);
                    // res.send(orders)
                    return res.json(result);
                }
            
                );
            });


  
    app.get('/orders/:myemail',(req,res)=>{
        const myemail = req.body.myemail;
        const found = orders.find((order)=>order.email == myemail) 
        console.log(found) 
        // db.query("SELECT * from orders where email =?"+mysql.escape(myemail),
        //     (err, result) => {
        //         if (err) throw err;
        //         console.log(result);
        //         return res.json(result);
        //     }
        // );

        res.send(found)
    });
        
            
        















































app.listen(8081,()=>{
    console.log("listening");
})