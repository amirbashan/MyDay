/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios from 'axios';
import general from './assets/config/general.config.json';
import mainIcons from './assets/config/mainIcons.json';
import DefaultImg from '../src/assets/icons/mainIcons/Default.svg';

const configPath = `config/`;

export interface GeneralConfig {
  server: {
    protocol: string;
    baseUrl: string;
    port: number;
    version: string;
  };
  clock: {
    clockRefresh: number;
    timeZone: string;
  };
  connectedUser: string;
}

interface IConfig {
  isInitialized: boolean;
  isError: boolean;
  general: GeneralConfig;
  mainIcons: any;
}

class InitConfig {
  config: IConfig;
  cache: { [key: string]: any };

  constructor() {
    this.config = {
      isInitialized: false,
      isError: false,
      general,
      mainIcons
    };
    this.cache = {};
  }

  async init() {
    const startTime = Date.now();
    const configs: Array<[string, string, string, any]> = [
      ['general', 'general.config', 'json', general],
      ['mainIcons', 'mainIcons', 'json', mainIcons]
    ];
    const loadedConfig = await Promise.allSettled(configs.map((conf) => this.loadConfig(...conf)));
    console.log('loadedConfig', loadedConfig);
    this.config.isInitialized = true;
    Object.seal(this.config);
    Object.freeze(this.config);
    const totalTimeSec = (Date.now() - startTime) / 1000;
    console.debug(`Initializing config took: ${Math.round(totalTimeSec * 100) / 100} seconds`);
  }

  async loadConfig(configKey: string, filename: string, type: string, defaultConfig: any) {
    try {
      const [extension, parser] = ['json', (res: any) => res];
      const path = `${configPath}${filename}.${extension}`;
      const { data } = await Axios.get(path);
      if (!data) {
        throw new Error('failed to fetch');
      }
      this.config[configKey as keyof IConfig] = { ...defaultConfig, ...parser(data) };
    } catch (e) {
      console.log(`Error loading config of ${configKey}, reason:`, e);
      this.config.isError = true;
      this.config[configKey as keyof IConfig] = { ...defaultConfig };
    }
    Object.seal(this.config[configKey as keyof IConfig]);
    Object.freeze(this.config[configKey as keyof IConfig]);
  }

  get general() {
    return this.config.general;
  }

  get mainIcons() {
    return this.config.mainIcons;
  }

  getBaseIcon(type: string, key: string) {
    const imageData = {
      image: this.mainIcons.src[type][key] || DefaultImg,
      alt: this.mainIcons.alt[type][key] || 'Missing img'
    };
    return imageData;
  }
}

const config = new InitConfig();
export default config;
