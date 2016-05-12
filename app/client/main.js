//load only the files we'll need on startup, on the client side
//because we are pointing to a directory, the import will look for an index.js file in that directory
import '/imports/startup/client'