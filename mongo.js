const mongoose = require("mongoose");

// Error check
if (process.argv.length < 3){
  console.log("Please provide the password as an argument: node mongo.js <password>");
  process.exit(1);
}

// Connect Mongoose to DB
const password = process.argv[2];
const url = `mongodb+srv://admin:${password}@metronome.b7331.mongodb.net/tempoDB?retryWrites=true&w=majority`;
mongoose.connect(url);

// Define the Schema for a tempo and the matching model
const tempoSchema = new mongoose.Schema({
  name: String,
  tempo: Number,
});
const Tempo = mongoose.model("Tempo", tempoSchema);

if (process.argv.length === 3){
  // Display all of the saved tempos
  Tempo.find({}).then(result => {
    result.forEach(tempo => {
      console.log(tempo);
    })
    mongoose.connection.close();
  })
}
else if (process.argv.length === 5){
  const newTempoName = process.argv[3];
  const newTempo = process.argv[4];
  // Create new tempo object from the model
  const tempo = new Tempo({
    name: newTempoName,
    tempo: newTempo,
  });
  // Save tempo to DB
  tempo.save().then(request => {
    console.log(`Added ${newTempoName}: ${newTempo} BPM to saved tempos`);
    mongoose.connection.close();
  });
}
else {
  console.log("Error, please provide arguents in one of the following formats: \n node mongo.js <password> \nnode mongo.js <password> <newTempoName> <newTempo>")
  mongoose.connection.close();
}