---
title: Frequently Asked Questions
description: Need help with something? Most of your issues can probably be solved from this page.
lang: en-US
sidebarDepth: 2
---

# Frequently Asked Questions

## Application

### General

#### Will there be an iOS version?
No. There is no iOS version, and there are no plans for one. Since iOS and Android apps do not share code, it is hard to port.

#### Will Aniyomi ever be on the Google Play Store?
Google Play's content policy does not allow the APK based extension system to work. The content on some websites will lead to Google taking it down at some point.


#### Can Aniyomi read Light Novels?
No. Aniyomi is an image parser, not a text parser.

#### Can Aniyomi sync between devices?
No.


#### How can I report Aniyomi copycats on the Google Play Store?
If you are on desktop, fill out [this](https://support.google.com/googleplay/android-developer/contact/takedown) form following [these](https://pastebin.com/08eeuJxH) steps.

### Library

#### How can I see how many episodes/chapters I have downloaded or unseen/unread?
Enable badges by going to <Navigation item="anime_library"/>/<Navigation item="manga_library"/> → <Navigation item="filter"/> → **Display** tab and then checking **Download badges** or **Unseen/Unread badges** at the bottom.

#### How do I ignore duplicate episodes/chapters?
Sometimes, you find a anime/manga that is translated by more than one group. Because of this, you get multiple releases for each episode/chapter in the anime/manga. There are several ways to skip the duplicate episodes/chapters:

* On the anime/manga page, tap on <Navigation item="filter"/> → **Sort** and choose **By chapter number**. Doing this will cause the player/reader to skip duplicates as you watch/read.
* Bookmark or mark as read the unwanted chapters, then tap on <Navigation item="filter"/> → **Filter** and double-tap **Bookmarked** or single-tap **Unread**, respectively. This will hide any bookmarked or read chapters and skip them as you read along, as long as you have **Skip filtered chapters** enabled under <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_reader"/> → **Reading**.
* Migrate to another source that does not have duplicates. For more information on how to migrate a anime/manga, see the [migration guide](/help/guides/source-migration/).

#### Why are some cover thumbnails corrupted, white, showing a broken page, or wrong?
The thumbnail download likely did not complete correctly. To fix this, refresh covers in settings.

::: guide
Refresh your covers by going to <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_advanced"/> then pressing **Refresh library covers**.
:::

#### Why have some anime episodes/manga chapters been marked as unseen/unread when I have not touched them?
The URLs of the anime episodes/manga chapters have changed, so Aniyomi detects the episode(s)/chapter(s) as new.

### Browse

#### Why can I not see sources that I have installed?

##### If it is an extension that is not the same language as your phone's primary language
Enable the language of the source by going to <Navigation item="browse"/> → Sources tab → <Navigation item="language"/> → Turn on the language of the source you would like to use.

##### If it is an NSFW extension
<Navigation item="settings"/> → <Navigation item="browse"/> → Check Show in sources and extensions list.

#### How do I find an/a anime/manga I am looking for?
Sometimes you can struggle to find a source that has the anime/manga you are looking to watch/read. Here are some tips to help you find it:
::: guide Tips to find your anime/manga
1. Look up the anime/manga on [Google](https://google.com/) or a anime/manga database such as [AniDB](https://anidb.net/) or [MangaUpdates](https://www.mangaupdates.com/).
1. See if the anime/manga has any alternate spellings or other title variations. Try searching again in your sources with the alternate titles you found.
1. If you still cannot find the anime/manga in any of your sources, then try to search for an extension for the website you found in step 1 in the [extensions](/extensions/) list.

### Player

#### Why are some episodes not displayed?
Aside from network issues, sometimes Aniyomi does not register the video as existing, exit and re-enter the player to fix this.

### Downloads

#### How do I download several episodes/chapters simultaneously?
The app does not allow parallel downloads from one source to prevent IP bans caused by too many requests. We know that speed is being sacrificed, but it is better than an overall inaccessible source.

However, if you download several anime/manga from different sources, the app will start downloading simultaneously from up to five different sources.

#### Why do my downloads sometimes stop midway through?
It is likely an issue to do with your connection to your network or the source. Aniyomi will notify you of what error it has encountered trying to download.

#### How do I cancel or change the download queue?
Go to <Navigation item="more"/> → Download Queue and cancel items in the queue or cancel all items by tapping on the <Navigation item="overflow"/> next to a anime/manga episode/chapter or on the top right. If you would like the change the order of the queue, tap and hold the = on the side of a item in the queue.

#### Can you make it possible to store anime/manga on both internal storage and external SD-card?
At the moment, no. You could try using symlinks, but that requires having your device rooted.
::: note
Read more about rooting your device [here](https://www.xda-developers.com/root/)
:::

#### Why can I see manga pages from my downloads in my device's photo gallery?
Aniyomi adds a `.nomedia` file to the Downloads folder by default to prevent this from happening, but sometimes it does not work, or something goes wrong. To fix this, all you need to do is create the file yourself. Name it `.nomedia` and place it in your downloads folder. If you have the same problem with your local manga, place the `.nomedia` file in the local folder.

### Local anime/manga

#### How do I import my downloaded anime/manga into Aniyomi?
We recommend you to read this guide for [local anime](/help/guides/local-anime) or [local manga](/help/guides/local-manga) on how to do so.

#### What do I do if I cannot find the Aniyomi folder?
If you do not see the **Aniyomi** folder, create one with a file manager.

#### How do I fix empty/blank covers on my local anime/manga?
Sometimes some covers for local anime/manga are not displayed. Follow these steps to fix it:

::: guide
1. Make sure you have created the right folder structure. To check that you have, open the anime/manga with the missing cover and check if you can watch/read episodes/chapters in the app. If not, follow this guide for [local anime](/help/guides/local-anime) or [local manga](/help/guides/local-manga) first.
1. Take a screenshot of which episodes/chapters you have seen/read, and then remove anime/manga from the library.
1. Go to <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_advanced"/> and tap **Clear database**. This will only affect anime/manga that are not in your library.
1. Go back to the <Navigation item="browse"/> → **Local source** and find the anime/manga. The cover should be fixed now. Add the anime/manga back to your library, mark your seen/read episodes/chapters, and re-add tracking if needed.
:::

::: note
Related GitHub issue: [#932](https://github.com/tachiyomiorg/tachiyomi/issues/932)
:::

### Application Updates

#### How do I enable automatic updates?
From version **0.9.0** and onwards, Aniyomi has had automatic updates for the app enabled by default. The **Preview** version also has automatic updates enabled by default.

However, if you think you are on an outdated version, go to <Navigation item="more"/> → <Navigation item="about"/> and tap on **Check for updates**.

#### Why are automatic updates not working?

Certain Android skins like MIUI have very aggressive battery saving, which can kill the app in the background. To whitelist Aniyomi from your battery saver, go to <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_advanced"/> and tap on **Disable battery optimization**. If that does not work, you can also visit [DontKillMyApp](https://dontkillmyapp.com/) to see what battery saving options your device has and how to disable or circumvent them.

### User Interface

#### Can I change the app language?
No. It was removed due to it causing small bugs everywhere in **Aniyomi**. Android does not provide a standard way of selecting a language that's not your device-language. You can improve the quality of the translations in your language [here](https://hosted.weblate.org/projects/tachiyomi/) or change your system language.


### Miscellaneous

#### What is Aniyomi Preview?
It is a weekly updated, beta version of the app. It contains features that may be added to Aniyomi in the future and is more prone to bugs and crashes. It is intended for users who would like the bleeding edge of Aniyomi as soon as it comes out.

If you are willing to use Aniyomi Preview, be sure to [turn on auto-backup](/help/guides/backups/#turning-on-auto-backups) to prevent losing your library due to potential bugs or crashes.

#### What is a fork?

Forks are alternative versions of Aniyomi with different features.

#### Why am I unable to uninstall Aniyomi?

On **Android 10**, a bug was introduced that prevented users from uninstalling the app if the device had a MicroSD card. To fix the issue, please remove the MicroSD card from the device first, then uninstall Aniyomi.

#### Can I revert from the Material Design 2 update of Aniyomi? 
It won't be reverted.

#### How do I pause history or go incognito?

Enable Incognito Mode by going to <Navigation item="more"/> → Incognito Mode.

#### Can I make Aniyomi only watch/read my downloaded episodes/chapters? Why am I not able to disable downloaded only?

Enable Download only by going to <Navigation item="more"/> → Download only.

#### What is DNS over HTTPS?

DNS over HTTPS is an experimental way of providing, as the name implies, DNS resolution via HTTPS.
It provides the advantage of not being vulnerable to Man-in-the-middle attacks (due to TLS encryption in HTTPS), preventing DNS spoofing. If you would like to learn more, go [here](https://www.cloudflare.com/learning/dns/dns-over-tls/). It allows some blocks to be circumvented without using a VPN.

You can enable this feature by going to <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_advanced"/>.

#### What should I do if I cannot screenshot within Aniyomi?
You have Secure Screen set on **Always**, disable it if you want to screenshot by going to <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_security"/> → Secure Screen.

#### How do I backup my library automatically? How do I move data from one phone to another?
Learn how to use the backup and restore feature [here](/help/guides/backups/), and learn how to enable automatic backups [here](/help/guides/backups/#turning-on-auto-backups/)

## Extensions

### General

#### What are some recommended extensions? What source is the best? What is the replacement for source X? Where to watch/read anime/manga Y?
Aniyomi does not endorse or recommend any anime/manga source, and there is no best extension. Instead, we encourage users to spend some time trying out a few sources themselves and discover what sources work best for them. What works well for somebody else might not work well for you.

<ElAlert type="info" title="Disclaimer" description="Aniyomi is not hosting any content, we are not affiliated with or responsible for any source that is; slow, down, missing chapters, or has subpar image quality." show-icon :closable="false"></ElAlert>

#### How do I request a new extension?
Open an issue on [GitHub](https://github.com/jmir1/aniyomi-extensions/issues) if one does not already exist.

::: note
You can find the list of extensions to download [here](/extensions/)
:::


#### How do I allow third-party installations?
::::: el-tabs
:::: el-tab-pane label="Android 8.0 and higher"
::: videolink
[<MaterialIcon icon="videocam"/> Click for Android 8.0 and newer video guide](/assets/faq_unknown-sources-a10.webm)
:::
When installing your first extension and you are prompted that your device *is not allowed* to install unknown apps from that source, follow the prompt to allow it.

In *newer* versions of **Android**, you need to enable **Install unknown apps** on a per-app basis.
::::
:::: el-tab-pane label="Android 7.1 and lower"
::: videolink
[<MaterialIcon icon="videocam"/> Click for Android 7.1 and older video guide](/assets/faq_unknown-sources-a7.webm)
:::
When installing your first extension and you are prompted that your device *is not allowed* to install unknown apps from that source, follow the prompt to allow it.

In *older* versions of **Android**, you only need to enable **Unknown sources** globally.
::::
:::::

::: note
If you need more help regarding this, read [this](https://www.theandroidsoul.com/how-to-allow-apps-installation-from-unknown-sources-on-android-9-pie/)
:::

#### How do I uninstall an extension?
Extensions for **Aniyomi** are technically installed the same as standard apps. Either you uninstall them through the app section on your device's settings or do it in **Aniyomi**.

::: guide
To uninstall an extension from within **Aniyomi**, go to <Navigation item="browse"/> → **Extensions** then tap **Uninstall** on the extension you want to remove.
:::

### Removed Extensions

#### Why am I unable to download an extension that used to exist?
Extensions tend to be removed for a variety of reasons: 

- They become too much of a cat and mouse game to maintain due to the website owners changing the site frequently to deter scrapers.
- The site scrambles images in more than one way, making it impossible to make every image unscrambleable.
- A scanlator team requests the removal of their site from Aniyomi.
- The site is paywalled.
- Require reverse engineering another app.
- The site has been shut down.

#### Do I need to migrate? 
No, unless expressly stated, the internal ID of sources has not changed, so migration is unnecessary.


## Android 11

### What changed in Android 11?
In Android 11, Google began forcing users to use [Scoped Storage](https://developer.android.com/about/versions/11/privacy/storage), which was introduced in Android 5.0 Lollipop, but Google only began forcing developers to use it on Android 11. Some OEMs seem to better implement Scoped Storage than others, with some users not running into any issues while users using other phone brands have multitudes of problems.

### What does it mean for Aniyomi?
The introduction of Scoped Storage means that many storage-related functions that Aniyomi uses may be much slower due to the inherent slowness of Scoped Storage, as outlined [here](https://www.xda-developers.com/android-q-storage-access-framework-scoped-storage/). These include deleting episodes/chapters, library load times, accessing the folders outside the data folders to download to or watch/read from, and more.

### Is there any way to improve performance?

You can try the command below if you know how to use ADB, a guide on installing it is also outlined on the site [here](/help/guides/troubleshooting/#what-are-some-common-errors).
```
adb shell cmd appops set eu.kanade.tachiyomi android:legacy_storage allow
```
This command enables general storage access for the app, allowing Aniyomi to use the old general storage access interface. 

## Shizuku

### What is Shizuku?
Aniyomi can use Shizuku as an alternate way to install and update extensions. It accesses system APIs to install directly packages without user input. Shizuku requires setup with ADB or root privileges. Read more about it [here](https://shizuku.rikka.app/introduction/).

### Do I need Shizuku?
No, only use Shizuku if you want to avoid being prompted during extension installations.

### How do I set Shizuku up?
To learn how to set Shizuku up, go [here](https://shizuku.rikka.app/guide/setup/). Once you have set it up, enable it in Aniyomi by going to **More** → **Settings** → **Advanced** → **Installer**.

### What is the difference between the installers?
* **Legacy**: fallback method installer if the standard PackageInstaller has issues. This is the default for MIUI.
* **PackageInstaller**: The default installer. This has more features depending on the Android version, such as skipping user prompts on Android 12 when updating extensions.
* **Shizuku**: See above.