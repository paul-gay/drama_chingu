// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import show from './documents/show'
import review from './documents/review'
import recap from './documents/recap'
// import genre from './documents/genre'
import actor from './documents/actor'
import blogPost from './documents/blogPost'
import mood from './documents/mood'
import category from './documents/category'
import simpleBlockContent from './objects/simpleBlockContent'
import mainImage from './objects/mainImage'
import blockContent from './objects/blockContent'




// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    show,
    review,
    recap,
    category,
    actor,
    blogPost,
    mood,
    simpleBlockContent,
    mainImage,
    blockContent,
  ]),
})
