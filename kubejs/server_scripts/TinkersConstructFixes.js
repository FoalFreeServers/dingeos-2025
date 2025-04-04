ServerEvents.tags('item', event => {
    event.add('c:raw_ores', 'tconstruct:raw_cobalt');
    event.add('c:raw_cobalt_ores', 'tconstruct:raw_cobalt');
    event.add('c:raw_cobalt_blocks', 'tconstruct:raw_cobalt_block');
    event.add('c:storage_blocks', 'tconstruct:raw_cobalt_block');

    const gems = ['emerald', 'diamond', 'quartz'];
    gems.forEach(g => event.add('c:' + g + '_gems', 'minecraft:' + g));

    const metals = [
        'iron',
        'brass',
        'bronze',
        'electrum',
        'silver',
        'steel',
        'tin',
        'gold',
        'copper',
        'cobalt',
        'slimesteel',
        'amethyst_bronze',
        'rose_gold',
        'pig_iron',
        'manyullyn',
        'hepatizon',
        'queens_slime',
        'netherite',
        'zinc',
        // 'knightslime'
        // 'soulsteel'
    ];
    metals.forEach(m => event.add('c:nuggets/' + m, '#c:' + m + '_nuggets'));

    const plates = [
        'iron',
        'brass',
        'bronze',
        'electrum',
        'silver',
        'steel',
        'tin',
        'gold',
        'copper',
        'cobalt',
        'slimesteel',
        'amethyst_bronze',
        'rose_gold',
        'pig_iron',
        'manyullyn',
        'hepatizon',
        'queens_slime',
        'netherite',
        'zinc',
        // 'knightslime'
        // 'soulsteel'
    ];
    plates.forEach(p => event.add('c:plates/' + p, '#c:' + p + '_plates'));
});
