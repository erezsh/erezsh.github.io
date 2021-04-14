function range(start, end) {
    let arr = []
    for (let i=start; i<end; i++)
    {
        arr.push(i)
    }
    return arr
}

function char_range(start, end) {
    let a = start.charCodeAt(0)
    let b = end.charCodeAt(0)
    return range(a, b+1).map( (c) => String.fromCharCode(c) )
}

STRIPS = 5
SYMBOLS = char_range('0', '9').concat(char_range('A', 'Z'))

WRAP_AROUND = 4

function create_html() {
    let e = $('<div/>', {class:'strip-inner'})

    // Repeat many times for easy wrap-around simulation
    for (var i=0; i<WRAP_AROUND; i++) {
        for (let s of SYMBOLS) {
            let box = $('<div/>', {class:'symbol'}).append(s)
            e.append(box)
        }
    }

    $('#strip1').append(e.clone())
    $('#strip2').append(e.clone())
    $('#strip3').append(e.clone())
    $('#strip4').append(e.clone())
    $('#strip5').append(e.clone())
}

function clip(value, min, max) {
    if (value < min) return min;
    else if (value > max) return max;
    else return value;
}

TILE_HEIGHT = 183

$(document).on('mouseup touchend', function() {
    for (strip of strips) {
        if (strip.panning) {
            strip.finish_panning()
        }
    }
})

function Strip (obj, anim_complete) {
    var self = this;
    var strip_inner = $('.strip-inner', obj)

    var mc = new Hammer(obj);
    mc.get('swipe').set({
        direction: Hammer.DIRECTION_VERTICAL,
        velocity: 2,
        threshold: 200,
    });

    mc.get('pan').set({
        direction: Hammer.DIRECTION_VERTICAL,
    })

    mc.on("panup pandown", function(ev) {
        strip_inner.css({top: self.pos*-TILE_HEIGHT + ev.deltaY})
        self.update_symbol()
        self.panning = true
    });

    self.finish_panning = function() {
        self.panning = false
        if (self.swiping) {
            return
        }
        var top = parseInt(strip_inner.css('top'))
        var pos = Math.round(top / -TILE_HEIGHT)
        self.scroll_to(pos, 200)
    }

    mc.on("swipeup swipedown", function(ev) {
        if (ev.deltaTime > 300)
            return;
        self.scroll_delta(-ev.deltaY / 50)
        self.swiping = true
    });

    self.scroll_to = function(new_pos, duration) {
        for (strip of strips) {
            strip.set_highlight(false)
        }

        new_pos = Math.round(new_pos)
        if (new_pos < SYMBOLS.length - 2) {
            new_pos += SYMBOLS.length * (WRAP_AROUND-2)
            var current_top = parseInt(strip_inner.css('top'))
            strip_inner.css({top: current_top - TILE_HEIGHT * SYMBOLS.length * (WRAP_AROUND-2)})
            self.pos = new_pos
        } else if (new_pos > SYMBOLS.length * (WRAP_AROUND-1)) {
            new_pos -= SYMBOLS.length * (WRAP_AROUND-2)
            var current_top = parseInt(strip_inner.css('top'))
            strip_inner.css({top: current_top + TILE_HEIGHT * SYMBOLS.length * (WRAP_AROUND-2)})
            self.pos = new_pos
        }
        new_pos = clip(new_pos, -2, SYMBOLS.length * WRAP_AROUND - 3)
        strip_inner.animate({
            top: -TILE_HEIGHT * new_pos,
        }, {
            duration: duration,
            progress: function(anim, progress){
                self.pos = Math.floor(anim.props.top / -TILE_HEIGHT)
                self.update_symbol()
            },
            complete: function () {
                anim_complete()
                self.swiping = false
            },
            easing: 'easeOutBack',
            queue: false
        })
    }

    self.scroll_delta = function(delta) {
        self.scroll_to(self.pos + delta, 1000)
    }
    
    self.update_symbol = function() {
        var pos = self.pos + 2
        self.symbol = SYMBOLS[pos % SYMBOLS.length]
    }

    self.set_highlight = function(highlight) {
        var symbol = $('.symbol', strip_inner)[self.pos+2]
        if (highlight) {
            $(symbol).addClass('highlight')
        } else {
            $(symbol).removeClass('highlight')
        }
    }

    // Props
    self.pos = SYMBOLS.length * WRAP_AROUND / 2 - 2;
    strip_inner.css({top: -TILE_HEIGHT * self.pos})
    self.update_symbol()
    self.panning = false;
    self.swiping = false;

}


var strips = [];

var x = 0;
$(function(){
    create_html()
    $('#code').text(CODE)

    function test() {
        var symbols = ''
        for (strip of strips) {
            symbols += strip.symbol
        }

        if (symbols == CODE) {
            for (strip of strips) {
                strip.set_highlight(true)
            }
        }
    }

    for (i=1; i<=5; i++) {
        strips.push( new Strip($('#strip' + i)[0], test) )
    }
})
