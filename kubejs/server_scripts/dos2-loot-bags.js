// Lootbag Global Objects (CREATE)
global.commonCreate = Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/create_lootbag",Name:"Lootbag (Create)",Type:"COMMON"}')
global.rareCreate = Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/rare_create_lootbag",Name:"Rare Lootbag (Create)",Type:"RARE"}')
global.epicCreate = Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/epic_create_lootbag",Name:"Epic Lootbag (Create)",Type:"EPIC"}')
global.legendaryCreate = Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/legendary_create_lootbag",Name:"Legendary Lootbag (Create)",Type:"LEGENDARY"}')
// XL Lootbag Global Objects (CREATE)
global.commonCreateXL = Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/create_lootbag_xl",Name:"XL Lootbag (Create)",Type:"COMMON"}')
global.rareCreateXL = Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/rare_create_lootbag_xl",Name:"Rare XL Lootbag (Create)",Type:"RARE"}')
global.epicCreateXL = Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/epic_create_lootbag_xl",Name:"Epic XL Lootbag (Create)",Type:"EPIC"}')
global.legendaryCreateXL = Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/legendary_create_lootbag_xl",Name:"Legendary XL Lootbag (Create)",Type:"LEGENDARY"}')

/*
        .weatherCheck({
            raining: true,
            thundering:true
        })
*/
	
LootJS.modifiers((event) => {
	
	// ____________________________CONTRAPTION ONLY______________________
	
	// CONTRAPTION DROP OF CREATE LOOTBAG - COMMON
    event
        .addBlockLootModifier("#c:ores")
		.not(n=>n.entityPredicate(() => true))
        .anyDimension("minecraft:overworld")
        .randomChance(0.00012)
        .dropExperience(50)
        //.matchMainHand(ItemFilter.hasEnchantment("silk_touch", 0, 0))
		.triggerLightningStrike(false)
		.addLoot(global.commonCreate)

	// CONTRAPTION DROP OF CREATE LOOTBAG - RARE
    event
        .addBlockLootModifier("#c:ores")
		.not(n=>n.entityPredicate(() => true))
        .anyDimension("minecraft:overworld")
        .randomChance(0.00008)
        .dropExperience(250)
        //.matchMainHand(ItemFilter.hasEnchantment("silk_touch", 0, 0))
		.triggerLightningStrike(false)
		.addLoot(global.rareCreate)
		
	// CONTRAPTION DROP OF CREATE LOOTBAG - COMMON XL
    event
        .addBlockLootModifier("#c:ores")
		.not(n=>n.entityPredicate(() => true))
        .anyDimension("minecraft:overworld")
        .randomChance(0.0001)
        .weatherCheck({
            raining: true,
            thundering:true
        })
        .dropExperience(250)
        //.matchMainHand(ItemFilter.hasEnchantment("silk_touch", 0, 0))
		.triggerLightningStrike(false)
		.addLoot(global.commonCreateXL)
		
	// CONTRAPTION DROP OF CREATE LOOTBAG - RARE XL
    event
        .addBlockLootModifier("#c:ores")
		.not(n=>n.entityPredicate(() => true))
        .anyDimension("minecraft:overworld")
        .randomChance(0.000035)
        .weatherCheck({
            raining: true,
            thundering:true
        })
        .dropExperience(450)
        //.matchMainHand(ItemFilter.hasEnchantment("silk_touch", 0, 0))
		.triggerLightningStrike(false)
		.addLoot(global.rareCreateXL)
		
	// ____________________________PLAYER ONLY______________________
	
	// PLAYER DROP OF CREATE LOOTBAG - COMMON
    event
        .addBlockLootModifier("#c:ores")
        .anyDimension("minecraft:overworld")
		.entityPredicate(() => true)
        .not(n=>n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")))
        .randomChance(0.0055)
        .dropExperience(50)
		.triggerLightningStrike(false)
		.addLoot(global.commonCreate)
		
	// PLAYER DROP OF CREATE LOOTBAG - RARE
    event
        .addBlockLootModifier("#c:ores")
        .anyDimension("minecraft:overworld")
		.entityPredicate(() => true)
        .not(n=>n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")))
        .randomChance(0.0005)
        .dropExperience(250)
		.triggerLightningStrike(false)
		.addLoot(global.rareCreate)

	// PLAYER DROP OF CREATE LOOTBAG - COMMON XL
    event
        .addBlockLootModifier("#c:ores")
        .anyDimension("minecraft:overworld")
		.entityPredicate(() => true)
        .not(n=>n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")))
        .randomChance(0.001)
        .weatherCheck({
            raining: true,
            thundering:true
        })
        .dropExperience(250)
		.triggerLightningStrike(false)
		.addLoot(global.commonCreateXL)
		
	// PLAYER DROP OF CREATE LOOTBAG - RARE XL
    event
        .addBlockLootModifier("#c:ores")
        .anyDimension("minecraft:overworld")
		.entityPredicate(() => true)
        .not(n=>n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")))
        .randomChance(0.00038)
        .weatherCheck({
            raining: true,
            thundering:true
        })
        .dropExperience(450)
		.triggerLightningStrike(false)
		.addLoot(global.rareCreateXL)
})


const createbagc = Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/create_lootbag",Name:"Lootbag (Create)",Type:"COMMON"}').strongNBT();
const createbagr = Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/rare_create_lootbag",Name:"Rare Lootbag (Create)",Type:"RARE"}').strongNBT();
const createbage = Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/epic_create_lootbag",Name:"Epic Lootbag (Create)",Type:"EPIC"}').strongNBT();
const createbagl = Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/legendary_create_lootbag",Name:"Legendary Lootbag (Create)",Type:"LEGENDARY"}').strongNBT();

const createbagcXL = Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/create_lootbag_xl",Name:"XL Lootbag (Create)",Type:"COMMON"}').strongNBT();
const createbagrXL = Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/rare_create_lootbag_xl",Name:"Rare XL Lootbag (Create)",Type:"RARE"}').strongNBT();
const createbageXL = Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/epic_create_lootbag_xl",Name:"Epic XL Lootbag (Create)",Type:"EPIC"}').strongNBT();
const createbaglXL = Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/legendary_create_lootbag_xl",Name:"Legendary XL Lootbag (Create)",Type:"LEGENDARY"}').strongNBT();

ServerEvents.recipes(event => {
	// 4 Common -> 1 Rare Lootbag
	event.recipes.createCompacting(createbagr, [
	  createbagc,
	  createbagc,
	  createbagc,
	  createbagc,
  	  "create_dd:overburden_casing"
	])
	
	// 4 Rare -> 1 Epic Lootbag
	event.recipes.createCompacting(createbage, [
	  createbagr,
	  createbagr,
	  createbagr,
	  createbagr,
	  "create:railway_casing"
	]).heated()
	
	// 4 Epic -> 1 Legendary Lootbag
	event.recipes.createCompacting(createbagl, [
	  createbage,
	  createbage,
	  createbage,
	  createbage,
	  "create_dd:netherite_casing"
	]).superheated()
	
	// 4 Common -> 1 Rare Lootbag (XL)
	event.recipes.createCompacting(createbagrXL, [
	  createbagcXL,
	  createbagcXL,
	  createbagcXL,
	  createbagcXL,
	  "create_dd:overburden_casing",
	  "create_dd:overburden_casing",
	  "create_dd:overburden_casing"
	])
	
	// 4 Rare -> 1 Epic Lootbag (XL)
	event.recipes.createCompacting(createbageXL, [
	  createbagrXL,
	  createbagrXL,
	  createbagrXL,
	  createbagrXL,
	  "create:railway_casing",
	  "create:railway_casing",
	  "create:railway_casing"
	]).heated()
	
	// 4 Epic -> 1 Legendary Lootbag (XL)
	event.recipes.createCompacting(createbaglXL, [
	  createbageXL,
	  createbageXL,
	  createbageXL,
	  createbageXL,
	  "create_dd:netherite_casing",
	  "create_dd:netherite_casing",
	  "create_dd:netherite_casing"
	]).superheated()
})