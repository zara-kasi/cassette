import { App, Plugin, PluginSettingTab, Setting } from 'obsidian';

export class CassetteSettingTab extends PluginSettingTab {
	plugin: CassettePlugin;

	constructor(app: App, plugin: CassettePlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();
	}
}
