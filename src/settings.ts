import { App, PluginSettingTab, Setting } from 'obsidian';

import { CassettePlugin } from './main'

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
