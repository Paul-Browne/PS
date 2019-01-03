var PS = {};
(function(q) {
    var topics = {}, subUid = -1;
    q.sub = function(topic, f) {
        if (!topics[topic]) {
            topics[topic] = [];
        }
        var t = (++subUid)+"";
        topics[topic].push({
            t: t,
            f: f
        });
        return t;
    };

    q.pub = function(topic, args) {
        if (!topics[topic]) {
            return false;
        }
        setTimeout(function() {
            var subscribers = topics[topic],
                len = subscribers ? subscribers.length : 0;

            while (len--) {
                subscribers[len].f(topic, args);
            }
        }, 0);
        return true;

    };

    q.unsub = function(t) {
        for (var m in topics) {
            if (topics[m]) {
                for (var i = 0, j = topics[m].length; i < j; i++) {
                    if (topics[m][i].t === t) {
                        topics[m].splice(i, 1);
                        return t;
                    }
                }
            }
        }
        return false;
    };
}(PS));
