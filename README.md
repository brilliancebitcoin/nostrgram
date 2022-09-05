# Nostrgram is now called Anigma

A clone of telegram built on nostr

# How to try

Click here: [https://anigma.io](https://anigma.io)

# To do

* [x] parse and display urls as clickable links
* [x] parse and display images in messages
* [x] implement message caching
* [x] make the emoji button functional
* [x] on mobile, push up the chat log when a user opens their keyboard
* [x] integrate nos2x
* [x] fix the socket disruption -- users report if you leave the app and return to it later, you can't see messages without a hard refresh, but sending still works
* [x] show a grey message counter in channels with messages you didn't read yet
* [x] on laptops and desktops, automatically put the user's cursor in the text input element when they enter a channel or a dm
* [x] fix the timestamp issue -- posts by users whose computers are slightly out of sync with one another sometimes display in the wrong order
* [x] when a mobile user starts typing, make the mic and attach-image buttons disappear
* [x] parse youtube video urls and display them as embedded
* [x] keep the keyboard visible after you send a message on mobile
* [x] multi select emojis before closing emoji window
* [x] create a mini player for youtube videos so you can leave the channel and keep the video playing
* [x] if that's not possible, at least make videos not scroll up when someone posts a message while a video is playing
* [x] fix bug where picture-in-picture youtube videos go to the bottom of the channel on mobile instead of wherever you clicked
* [x] fix bug where picture-in-picture youtube videos move weirdly on mobile
* [x] fix bug where if you watch a picture-in-picture youtube video on mobile and open the sidebar, the sidebar becomes too long 
* [x] load new messages into msg_cache during getLatestMessage() rather than waiting for add-message
* [ ] private groups with shared decryption keys
* [ ] integrate lnbits
* [ ] make an option to set and modify relays in settings
* [ ] connect to at least two relays by default
* [ ] import channels and other backed up data when you import an account
* [ ] when a user imports a private key, automatically replace their username, about, and picture on the settings page 
* [ ] parse and display @[username] and @[pubkey] as links to profile pages
* [ ] show a green message counter in channels or dms where someone @'d you or dm'd you
* [ ] add an about section to profile pages
* [ ] add message replies via long press or right click
* [ ] add sticky messages
* [ ] let channel creators blacklist posts and users (blacklists are enforced client side, so client software can optionally ignore them)
* [ ] let channel creators add admins with sticky powers and blacklisting powers
* [ ] add sticker packs
* [ ] make the mic button record and broadcast voice chats powered by [https://relay.nostr.info/test/chat.html](https://relay.nostr.info/test/chat.html)
* [ ] make the image attach button prompt you to upload your image to imgur and then paste the link
* [ ] show "last seen" indicators for people in your dm list
* [ ] when a dm is closed, don't show it again til the dm'd person says something
* [ ] let users block individuals from appearing in their dms
* [ ] let users close their dms so people can't show up unannounced
* [ ] let users close their dms except to people who pay a fee
* [ ] if a user types /me at the start of their message their bubble should display their name inline as the first word of their message
* [ ] search channel history
* [ ] search for channels & users
* [ ] nip05 support (domain-based checkmarks)
* [ ] nip07 support (likes and reactions)
* [ ] dark mode
* [ ] investigate why new messages sometimes say they happened 12 months ago (this seems more prevalent on mobile)
* [ ] investigate why new messages don't always show up as the latest message in the sidebar
* [ ] add a "messages not read" delineating line if you go to a channel or a dm with fewer than 200 unread messages in it, separating the messages you read from the messages you didn't
* [ ] if a "messages not read" line exists when entering a channel or a dm containing unread messages, autoscroll to that instead of to the latest message
* [ ] fix the bug that makes stuff disappear below the fold when images and videos expand
* [ ] the anigma browser tab should show a notification when new messages arrive
* [ ] print the total messages that are in a channels in the channel about div
* [ ] if a user is not near the bottom of the chat log, don't scroll to the bottom when they open up the keyboard
* [ ] users who click or tap the back button should not close the app. They should go to the previous page
* [ ] users who go from a channel to a profile should have a button to go back to the channel. The button that seems most obvious currently takes them to the sidebar
* [ ] let users add a pubkey to their dms similar to how they can add channels
* [ ] add support for nos2x's relay list
* [ ] fix bug where unread messages get marked as read upon refresh due to being in the message cache
* [ ] bring back the minmax button on the pip frame for mobile users. When clicked once, the video should anchor to the top. Twice and it should anchor to the bottom. Three times and it should vanish, leaving only the buttons floating there. Four times and it should get "big" again (I put that in quotes because it should still have a maximum width of 190 pixels).
* [ ] give people a link to view their public profile
* [ ] display your profile picture on the settings page
* [ ] fix metadata bug. The function updateUserMeta() does not modify the onclick parameter of profile pictures in a channel until you refresh, so when someone clicks a profile picture to view them, they see their auto-generated avatar and pubkey instead of their custom profile picture and username
