// Gittu: This is from reddit. So far I noticed Chipped and Hephaestus is affected.
// https://www.reddit.com/r/feedthebeast/comments/171d4os/comment/l238xfn/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button

// This is a work-around for not being able to delete certain tagged recipes.
// I *think* that normally you're supposed to use ``afterRecipes`` for this but that's bugged.
// Instead, you can force a reload immediately after the first player logs in which will re-apply
// removals for newly added tags. Gross.

global._evil_global_has_reloaded = false;

ServerEvents.loaded(event => {
    if (global._evil_global_has_reloaded) return;

    console.log("Forcing reload to work around KubeJS bugs...")
    Utils.server.runCommand("reload");  
    global._evil_global_has_reloaded = true;
});