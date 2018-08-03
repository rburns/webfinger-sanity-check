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

test('dansup@pixelfed.social', 'pixelfed');
test('https://pixelfed.social/dansup', 'pixelfed');

test('aqz@misskey.xyz', 'misskey');
test('https://misskey.xyz/@/aqz', 'misskey');

test('alfred@libranet.de', 'friendica');
test('https://libranet.de/profile/alfred', 'friendica');

test('hubzillaru@hub.libranet.de', 'hubzilla');
test('https://hub.libranet.de/channel/hubzillaru', 'hubzilla');

test('t@a4.io', 'microblog.pub');
// fail: not intended to work
//test('https://a4.io/', 'microblog.pub');

test('fluffy@baptiste.gelez.xyz', 'plume');
// fail: not intended to work
// test('https://baptiste.gelez.xyz/@/fluffy', 'plume');

test('veer66@peertube.video', 'peertube');
// fail: not intended to work
// test('https://peertube.video/accounts/veer66', 'peertube');

test('dlf@loma.ml', 'socialhome');
// fail: doubtful that this is intended to work
// test('https://socialhome.network/p/373ebf56165ac9f9244c1c6766434442', 'socialhome');

// fail: doubtful that webfinger is implemented
// test('public@distbin.com', 'distbin');
// fail: doubtful that webfinger is implemented
// test('https://distbin.com/public', 'distbin');

// fail: doubtful that webfinger is implemented
// test('socialcoop-london-area@gettogether.community', 'gettogether');
// fail: doubtful that webfinger is implemented
// test('https://gettogether.community/socialcoop-london-area/', 'gettogether');

function test(addr, note) {
    webfinger(addr, (err, result) => {
        if( err ) {
            console.log('\x1b[31m\u2718\x1b[0m', note, addr)
            // console.log(err);
        } else {
            console.log('\x1b[32m\u2714\x1b[0m', note, addr)
            // console.log(result);
        }
    });
}
