import admin from "firebase-admin";
import serviceAccount from "../serviceAccountKey.json" assert { type: "json" };
// Initialize Firebase

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
export const RegisterCustomer = async (req, res) => {
    admin.auth().createUser({
        email: req.body.email,
        password: req.body.password
    }).then(function (userRecord) {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log("Successfully created new user:", userRecord.uid);
    })
        .catch(function (error) {
            console.log("Error creating new user:", error);
        });
    try {
        console.log(req.body);
        const id = req.body.email;
        const userJson = {
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName
        };
        const response = db.collection("users").add(userJson);
        res.send(res);
    } catch (error) {
        res.send(error);
    }

};

export const GetCustomer = async(req,res)=>{
    try {
        let query = db.collection("users");
        let response = [];
  
        await query.get().then((data) => {
          let docs = data.docs; // query results
  
          docs.map((doc) => {
            const selectedData = {
              email: doc.data().email,
              password: doc.data().password,
              firstName: doc.data().firstName,
            };
  
            response.push(selectedData);
            
          });
          return response;
        });
  
        return res.status(200).send({ status: "Success", data: response });
      } catch (error) {
        console.log(error);
        res.status(500).send({ status: "Failed", msg: error });
      }
};


