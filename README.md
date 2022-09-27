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
* [x] when a user imports a private key, automatically replace their username, about, and picture on the settings page 
* [x] show a green message counter in dms
* [x] if a user is not near the bottom of the chat log, don't scroll to the bottom when they open up the keyboard
* [x] display your profile picture on the settings page
* [x] when dming a user, clicking their profile pic in the header should take you to their profile
* [x] add an about section to profile pages
* [x] investigate why new messages sometimes say they happened 12 months ago (this seems more prevalent on mobile)
* [x] integrate lnbits
* [x] fix metadata bug. The function updateUserMeta() does not modify the onclick parameter of profile pictures in a channel until you refresh, so when someone clicks a profile picture to view them, they see their auto-generated avatar and pubkey instead of their custom profile picture and username
* [x] change the default channel from bitcoin to nostr
* [x] fix the emoji modal bug where the select bar gets cleared when you view the next page of emojis
* [x] give people a link to view their public profile above Manage Channels
* [x] make the image attach button prompt you to upload your image to imgur and then paste the link
* [x] make anigma not autoscroll to the bottom unless you are already close to the bottom (fixed on desktop)
* [x] fix the same bug on mobile
* [x] add message replies via long press or right click (I ended up going with a short click or tap)
* [ ] private groups with shared decryption keys
* [ ] make an option to set and modify relays in settings
* [ ] connect to at least two relays by default
* [ ] import channels and other backed up data when you import an account
* [ ] parse and display @[username] and @[pubkey] as links to profile pages (see nip08 for a spec)
* [ ] show a green message counter in channels where someone @'d you or dm'd you or replied to you
* [ ] add sticky messages
* [ ] let channel creators blacklist posts and users (blacklists are enforced client side, so client software can optionally ignore them)
* [ ] let channel creators add admins with sticky powers and blacklisting powers
* [ ] add sticker packs
* [ ] make the mic button record and broadcast voice chats powered by [https://relay.nostr.info/test/chat.html](https://relay.nostr.info/test/chat.html)
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
* [ ] investigate why new messages don't always show up as the latest message in the sidebar
* [ ] add a "messages not read" delineating line if you go to a channel or a dm with fewer than 200 unread messages in it, separating the messages you read from the messages you didn't
* [ ] if a "messages not read" line exists when entering a channel or a dm containing unread messages, autoscroll to that instead of to the latest message
* [ ] fix the bug that makes stuff disappear below the fold when images and videos expand
* [ ] the anigma browser tab should show a notification when new dms, @'s, or replies arrive
* [ ] print the total messages that are in a channel in its about div
* [ ] users who click or tap the back button should not close the app. They should go to the previous page
* [ ] users who go from a channel to a profile should have a button to go back to the channel. The button that seems most obvious currently takes them to the sidebar
* [ ] let users add a pubkey to their dms similar to how they can add channels
* [ ] add support for nos2x's relay list
* [ ] fix bug where unread messages get marked as read upon refresh due to being in the message cache
* [ ] bring back the minmax button on the pip frame for mobile users. When clicked once, the video should anchor to the top. Twice and it should anchor to the bottom. Three times and it should vanish, leaving only the buttons floating there. Four times and it should get "big" again (I put that in quotes because it should still have a maximum width of 190 pixels).
* [ ] investigate possible heartbeat errors that are especially prevalent on mobile -- users report seeing and sending duplicate posts, possibly this is caused by having multiple socket connections open, which is possibly caused by the heartbeat
* [ ] write a function that checks if the penultimate message was by the same person as the most recent message, and if so, reduce the margin between them and only display the profile picture of the "top" post in the chain
* [ ] add support for replaceable events (nip16) and use them to sync account-specific private data across devices
* [ ] add support for ephemeral events (nip16) and use them to display "typing..." indicators
* [ ] add several hard coded channels in a hidden way and expose them via the search bar
* [ ] fix the metadata overwrite bug -- I think this is caused by anigma sometimes running the function that creates a local metadata cache and then pushing it to nostr before it checks if you already have metadata on nostr
* [ ] on mobile, when someone clicks to view the sidebar, scroll it to the top
* [ ] on mobile, when someone clicks to view the sidebar, remove the "active" class from the channel they were just in so they can see the unread message count
* [ ] fix bug that urlifies backticks
* [ ] if browser is not in focus, don't scroll to bottom when new messages come in
localization i18n
* [ ] add a i18n solution (https://phrase.com/blog/posts/step-step-guide-javascript-localization/)
