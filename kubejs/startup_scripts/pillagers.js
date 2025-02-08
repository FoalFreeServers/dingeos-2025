//attributes Startup Script
EntityJSEvents.attributes(event => {
    event.modify('minecraft:vindicator', attribute => {
        attribute.add("minecraft:generic.max_health", 34)
attribute.add("minecraft:generic.follow_range", 64)
attribute.add("minecraft:generic.movement_speed", 0.5)
attribute.add("minecraft:generic.armor", 6)
    })
    event.modify('minecraft:pillager', attribute => {
        attribute.add("minecraft:generic.max_health", 28)
attribute.add("minecraft:generic.follow_range", 64)
attribute.add("minecraft:generic.movement_speed", 0.5)
attribute.add("minecraft:generic.armor", 4)
    })
    event.modify('minecraft:evoker', attribute => {
        attribute.add("minecraft:generic.max_health", 30)
attribute.add("minecraft:generic.follow_range", 64)
attribute.add("minecraft:generic.movement_speed", 0.65)
attribute.add("minecraft:generic.armor", 4)
    })
    //You are able to see existing attributes an entity may already have like so
    event.getAttributes('pillager').forEach(attribute => {
        console.log(`Pillager Attribute: ${attribute.descriptionId}: ${attribute.defaultValue}`)
    })
    // Returns a list of all entity types that can have their attributes modified by this event
    console.log(event.getAllTypes())
})

