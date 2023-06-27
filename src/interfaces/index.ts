export type TPlatform = 'chromium-android' | 'chrome-android' | 'safari-iphone' | 'standalone';
export type TCookieVal = 'notified' | 'initialized';

export interface INavigator extends Navigator {
  standalone: boolean;
}

export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];

  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;

  prompt(): Promise<void>;
}

export interface ITranslate {
  headline: string;
  bottomline: string;
  safariTapShare: string;
  safariAddHomeScreen: string;
  chromiumAddHomeScreen: string;
  chromiumInstall: string;
  buttonInstall: string;
}

export interface IStyles {
  body: React.CSSProperties;
  button: React.CSSProperties;
  heading: React.CSSProperties;
}
export interface IProps {
  delayNotify: number;
  skipFirstVisit: boolean;
  cookie: { name?: string; expireDays?: number };
  translate: Partial<ITranslate>;
  styles: Partial<IStyles>;
}

export interface IInitData {
  platform: TPlatform | null;
  openNotify: boolean;
}

export interface IMemoSession {
  eventInstall?: BeforeInstallPromptEvent;
  firstVisit: boolean;
}
