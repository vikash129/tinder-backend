import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({

    name : String ,
    imgUrl : String
})
// console.log(cardSchema)

export default mongoose.model('Cards' , cardSchema)



// Schema {
//     obj: { name: [Function: String], imgUrl: [Function: String] },
//     paths: {

//       name: SchemaString {
//         enumValues: [],
//         regExp: null,
//         path: 'name',
//         instance: 'String',
//         validators: [],
//         getters: [],
//         setters: [],
//         _presplitPath: [Array],
//         options: [SchemaStringOptions],
//         _index: null,
//         [Symbol(mongoose#schemaType)]: true
//       },

//       imgUrl: SchemaString {
//         enumValues: [],
//         regExp: null,
//         path: 'imgUrl',
//         instance: 'String',
//         validators: [],
//         getters: [],
//         setters: [],
//         _presplitPath: [Array],
//         options: [SchemaStringOptions],
//         _index: null,
//         [Symbol(mongoose#schemaType)]: true
//       },
//       _id: ObjectId {
//         path: '_id',
//         instance: 'ObjectID',
//         validators: [],
//         getters: [],
//         setters: [Array],
//         _presplitPath: [Array],
//         options: [SchemaObjectIdOptions],
//         _index: null,
//         defaultValue: [Function],
//         [Symbol(mongoose#schemaType)]: true
//       }
//     },
//     aliases: {},
//     subpaths: {},
//     virtuals: {},
//     singleNestedPaths: {},
//     nested: {},
//     inherits: {},
//     callQueue: [],
//     _indexes: [],
//     methods: {},
//     methodOptions: {},
//     statics: {},
//     tree: {
//       name: [Function: String],
//       imgUrl: [Function: String],
//       _id: { auto: true, type: 'ObjectId' }
//     },
//     query: {},
//     childSchemas: [],
//     plugins: [],
//     '$id': 1,
//     mapPaths: [],
//     s: { hooks: Kareem { _pres: Map(0) {}, _posts: Map(0) {} } },
//     _userProvidedOptions: {},
//     options: {
//       typeKey: 'type',
//       id: true,
//       _id: true,
//       validateBeforeSave: true,
//       read: null,
//       shardKey: null,
//       discriminatorKey: '__t',
//       autoIndex: null,
//       minimize: true,
//       optimisticConcurrency: false,
//       versionKey: '__v',
//       capped: false,
//       bufferCommands: true,
//       strictQuery: true,
//       strict: true
//     }
//   }