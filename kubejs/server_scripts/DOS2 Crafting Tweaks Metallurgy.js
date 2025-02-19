ServerEvents.recipes(event => {

// ████████ CREATE METALLURGY, ADJUSTMENTS & FIXES ████████████████████████████████████████████████████


	// BRASS SECTION ----------------------------------------------------------------------------------

	// High Yield Brass Recipe - Confirmed IG
	event.remove({ fluid: 'molten_metals:molten_brass', type: 'create:mixing', fluid: 'molten_metals:molten_zinc', fluid: 'molten_metals:molten_copper' })
	event.recipes.createMixing([
	  Fluid.of('molten_metals:molten_brass',81000)], [
	  Fluid.of('molten_metals:molten_copper',36000),
	  Fluid.of('molten_metals:molten_zinc',18000),
	  '2x create_dd:tin_nugget'
	]).heated()
	
	// BRONZE SECTION ---------------------------------------------------------------------------------
	
	// High Yield Bronze Recipe
	event.remove({ fluid: 'molten_metals:molten_bronze', type: 'create:mixing', fluid: 'molten_metals:molten_tin', fluid: 'molten_metals:molten_copper' })
	event.recipes.createCompacting([
	  Fluid.of('molten_metals:molten_bronze',63000)], [
	  Fluid.of('molten_metals:molten_copper',36000),
	  Fluid.of('molten_metals:molten_tin',9000),
	  Item.of('4x create:zinc_nugget'),
	  Item.of('createaddition:electrum_nugget'),
	]).superheated()
	
	// Normal Bronze Recipe
	event.recipes.createCompacting([
	  Fluid.of('molten_metals:molten_bronze',36000)], [
	  Fluid.of('molten_metals:molten_copper',27000),
	  Fluid.of('molten_metals:molten_tin',9000),
	]).heated()

	// COPPER SECTION ---------------------------------------------------------------------------------

	// High Yield Copper Recipe - Confirmed IG
	event.recipes.createMixing([
	Fluid.of('molten_metals:molten_copper',54000),
	Item.of('2x molten_metals:slag')], [
	  '2x create:crushed_raw_copper',
	  'garnished:salt_compound',
	  Fluid.of('minecraft:water',81000)
	]).heated()
	
	// ELECTRUM SECTION ---------------------------------------------------------------------------------
	
	// High Yield Electrum Recipe - Confirmed IG
	event.recipes.createMixing([
	Fluid.of('molten_metals:molten_electrum',27000),
	], [
	Fluid.of('molten_metals:molten_gold',9000),
	Fluid.of('molten_metals:molten_silver',9000),
	Item.of('2x garnished:salt_compound')
	]).heated()
	
	//Normal Electrum Recipe
	event.recipes.createMixing([
	Item.of('2x createaddition:electrum_ingot'),
	], [
		'minecraft:gold_ingot',
		'galosphere:silver_ingot'
	]).heated()
	
	//Electrum Casting ^ - Ceramic Mold
	event.recipes.createFilling([
	Item.of('molten_metals:molten_electrum_ceramic_ingot_mold')], [
	Fluid.of('molten_metals:molten_electrum',9000),
	Item.of('molten_metals:ceramic_ingot_mold')
	])
	
	//Electrum Casting ^ - Normal Mold
	event.recipes.createFilling([
	Item.of('molten_metals:molten_electrum_ingot_mold')], [
	Fluid.of('molten_metals:molten_electrum',9000),
	Item.of('molten_metals:ingot_mold')
	])	
	
	//Electrum Washing ^ - Ceramic Mold
	event.remove({ input: 'molten_metals:molten_electrum_ceramic_ingot_mold', type: 'create:splashing' })
	event.recipes.createSplashing([
	Item.of('createaddition:electrum_ingot'),
	Item.of('molten_metals:ceramic_ingot_mold').withChance(0.80),
	], [
		'molten_metals:molten_electrum_ceramic_ingot_mold'
	])
	
	//Electrum Washing ^ - Normal Mold
	event.remove({ input: 'molten_metals:molten_electrum_ingot_mold', type: 'create:splashing' })
	event.recipes.createSplashing([
	Item.of('createaddition:electrum_ingot'),
	Item.of('molten_metals:ingot_mold'),
	], [
		'molten_metals:molten_electrum_ingot_mold'
	])
	
	// IRON SECTION -------------------------------------------------------------------------------------
	
	// High Yield Iron Recipe - Confirmed IG
	event.recipes.createMixing([
	Fluid.of('molten_metals:molten_iron',54000),
	Item.of('3x molten_metals:slag'),
	Item.of('minecraft:redstone').withChance(0.75),
	], [
	  '2x create:crushed_raw_iron',
	  '2x #minecraft:coals',
	  'create:limestone'
	]).heated()
		
	// NETHERITE SECTION ---------------------------------------------------------------------------------
		
	// High Yield Netherite Recipe - Confirmed IG
	event.recipes.createCompacting([
	Fluid.of('molten_metals:molten_netherite',27000),
	Item.of('2x molten_metals:slag')], [
	  '2x createmetalwork:crushed_netherite_scrap',
	Fluid.of('molten_metals:molten_gold',18000)
	]).superheated()

	// NETHERSTEEL SECTION ---------------------------------------------------------------------------------

	// Normal Nethersteel Recipe
	event.recipes.createCompacting([
	Fluid.of('createbigcannons:molten_nethersteel',54000),
	Item.of('1x molten_metals:slag')], [
	Fluid.of('molten_metals:molten_steel',45000),
	Item.of('createmetalwork:crushed_netherite_scrap'),
	Item.of('2x minecraft:gold_nugget')
	]).superheated()
	
	//Nethersteel Casting ^ - Ceramic Mold - Confirmed IG
	event.recipes.createFilling([
	Item.of('createmetalwork:molten_nethersteel_ceramic_ingot_mold')], [
	Fluid.of('createbigcannons:molten_nethersteel',9000),
	Item.of('molten_metals:ceramic_ingot_mold')
	])
	
	//Nethersteel Casting ^ - Normal Mold - Confirmed IG
	event.recipes.createFilling([
	Item.of('createmetalwork:molten_nethersteel_ingot_mold')], [
	Fluid.of('createbigcannons:molten_nethersteel',9000),
	Item.of('molten_metals:ingot_mold')
	])

	// SILVER SECTION --------------------------------------------------------------------------------

	// High Yield Silver Recipe - Confirmed IG
	event.recipes.createMixing([
	Fluid.of('molten_metals:molten_silver',63000),
	Item.of('3x molten_metals:slag'),
	Item.of('3x createaddition:electrum_nugget').withChance(0.75),
	], [
	  '3x create:crushed_raw_silver',
	  '2x garnished:salt_compound',
	  'create:limestone'
	]).heated()
	
	// TIN SECTION -----------------------------------------------------------------------------------
	
	// High Yield Tin Recipe - Confirmed IG
	event.recipes.createMixing([
	Fluid.of('molten_metals:molten_tin',45000),
	Item.of('3x molten_metals:slag')], [
	  '2x create:crushed_raw_tin',
	  '2x #minecraft:coals',
	  'create:limestone'
	]).heated()
	
	// ZINC SECTION -----------------------------------------------------------------------------------
	
	// High Yield Zinc Recipe - Confirmed IG
	event.recipes.createMixing([
	Fluid.of('molten_metals:molten_zinc',81000),
	Item.of('6x minecraft:iron_nugget').withChance(0.75),
	Item.of('6x minecraft:gold_nugget').withChance(0.75),
	Item.of('6x create:copper_nugget').withChance(0.75),
	Item.of('6x molten_metals:slag')], [
	  '4x create:crushed_raw_zinc',
	  'garnished:salt_compound',
	  'minecraft:redstone'
	]).heated()

	// STEEL SECTION -----------------------------------------------------------------------------------
	
	// Unifying Steel
	event.remove({ fluid: 'createbigcannons:molten_steel', type: 'create:compacting' })
	
	event.recipes.createCompacting('createbigcannons:cast_iron_ingot', [
	  'minecraft:iron_ingot',
	  'createnuclear:coal_dust'
	]).heated()
	
	// No Nuclear Steel
	event.remove({ input: 'createnuclear:coal_dust', type: 'create:mixing' })
	
	// Steel Exchange
	event.stonecutting('create_dd:steel_ingot', 'createnuclear:steel_ingot')
	event.stonecutting('createnuclear:steel_ingot', 'create_dd:steel_ingot')
	
	event.recipes.createMixing(Fluid.of('molten_metals:molten_steel', 36000), [
	  '2x create:limestone',
	  'create_dd:industrial_iron_ingot',
	  Fluid.of('molten_metals:molten_iron', 18000),
	]).heated()

	//Steel Casting ^ - Ceramic Mold < was missing for some reason
	event.recipes.createFilling([
	Item.of('molten_metals:molten_steel_ceramic_ingot_mold')], [
	Fluid.of('molten_metals:molten_steel',9000),
	Item.of('molten_metals:ceramic_ingot_mold')
	])

	// --------------------------------------------------------------------------------------------------

	// INDUSTRIAL IRON SECTION
	
	event.remove({ input: 'createdeco:industrial_iron_ingot', output: 'create:industrial_iron_block' })
	event.remove({ input: 'create:industrial_iron_block', output: 'createdeco:industrial_iron_ingot' })
	
	event.stonecutting('2x create:industrial_iron_block', 'createdeco:industrial_iron_ingot')

	// DD Industrial Iron Recipe
	event.recipes.createCompacting('create_dd:industrial_iron_ingot', [
	  'minecraft:iron_ingot'
	]).heated()

	// Deco Industrial Iron Recipe	
	event.recipes.createCompacting('createdeco:industrial_iron_ingot', [
	  'create:iron_sheet'
	]).heated()
})