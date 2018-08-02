var webfinger = require('webfinger').webfinger;

test('rburns@kosmos.social', 'mastodon');
test('https://kosmos.social/@rburns', 'mastodon');

test('kaniini@pleroma.site', 'pleroma');
test('https://pleroma.site/users/kaniini', 'pleroma');

test('maiyannah@community.highlandarrow.com', 'postactiv');
test('https://community.highlandarrow.com/maiyannah', 'postactiv');

test('dsh@deadsuperhero.com', 'diaspora');
test('https://deadsuperhero.com/channel/dsh', 'diaspora');

test('lnxw48a1@nu.federati.net', 'gnusocial');
test('https://nu.federati.net/lnxw48a1', 'gnusocial');

test('veer66@peertube.video', 'peertube');
test('https://peertube.video/accounts/veer66', 'peertube');

test('dansup@pixelfed.social', 'pixelfed');
test('https://pixelfed.social/dansup', 'pixelfed');

function test(addr, note) {
    webfinger(addr, (err, result) => {
        if( err ) {
            console.log("\nwebfinger", note, addr, "err\n")
        } else {
            console.log('webfinger', note, addr, 'success')
        }
    });
}
