//Aqui van los middleware de los contactos
import contact from "../models/contact.js";

const existingContact = async (req, res, next) => {
  if(!req.body.name) return res.status(400).send({message: "Incomplete data"});

  let searchContact = await contact.find({ phoneBookId: req.body.phoneBookId });
  let array = [];
  for (let i = 0; i < searchContact.length; i++) {
    let saveName = searchContact[i].name.replace(/ /g, "");
    array.push(saveName);
  }

  if (!array.includes(req.body.name.replace(/ /g, ""))) return next();
  res.status(400).send({ message: "This name contact "+ req.body.name+" is already registered in this phone book"});
};

const notChanges = async (req, res, next) => {
  const changes = await contact.findOne({
    name: req.body.name,
    tel: req.body.tel,
    cel: req.body.cel,
  });

  return changes
    ? res.status(400).send({ message: "No changes were made" })
    : next();
};

export default { existingContact, notChanges };
