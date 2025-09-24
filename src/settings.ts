import { App, PluginSettingTab, Setting } from 'obsidian';

import CassettePlugin from './main'

export class CassetteSettingTab extends PluginSettingTab {
	plugin: CassettePlugin;

	constructor(app: App, plugin: CassettePlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();
		const section = (title: string, startOpen = false) => {
      const head = containerEl.createEl('h2', { text: title });
      head.style.cursor = 'pointer';
      head.style.userSelect = 'none';
      head.style.margin = '1.2em 0 0.4em 0';
      const body = containerEl.createDiv();
      body.style.marginLeft = '1em';
      body.style.display = startOpen ? 'block' : 'none';
      head.addEventListener('click', () => {
        body.style.display = body.style.display === 'none' ? 'block' : 'none';
      });
      return body;
    };

    const AniList = section('AniList');
    const MAL = section('MAL');
    const Simkl = section('Simkl');
    const Setup = section('Setup');
    const Display = section('Sync');
    const Template = section('Template');
    const About = section('About');
	}
}
