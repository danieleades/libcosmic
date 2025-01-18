(function() {
    var type_impls = Object.fromEntries([["atspi",[]],["atspi_common",[]],["x11rb",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-(A,+B)\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#518\">source</a><a href=\"#impl-Serialize-for-(A,+B)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A, B&gt; <a class=\"trait\" href=\"x11rb/x11_utils/trait.Serialize.html\" title=\"trait x11rb::x11_utils::Serialize\">Serialize</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.tuple.html\">(A, B)</a><div class=\"where\">where\n    A: <a class=\"trait\" href=\"x11rb/x11_utils/trait.Serialize.html\" title=\"trait x11rb::x11_utils::Serialize\">Serialize</a>,\n    B: <a class=\"trait\" href=\"x11rb/x11_utils/trait.Serialize.html\" title=\"trait x11rb::x11_utils::Serialize\">Serialize</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Bytes\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#518\">source</a><a href=\"#associatedtype.Bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"x11rb/x11_utils/trait.Serialize.html#associatedtype.Bytes\" class=\"associatedtype\">Bytes</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>&gt;</h4></section></summary><div class='docblock'>The value returned by <code>serialize</code>. <a href=\"x11rb/x11_utils/trait.Serialize.html#associatedtype.Bytes\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#518\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"x11rb/x11_utils/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>(&amp;self) -&gt; &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.tuple.html\">(A, B)</a> as <a class=\"trait\" href=\"x11rb/x11_utils/trait.Serialize.html\" title=\"trait x11rb::x11_utils::Serialize\">Serialize</a>&gt;::<a class=\"associatedtype\" href=\"x11rb/x11_utils/trait.Serialize.html#associatedtype.Bytes\" title=\"type x11rb::x11_utils::Serialize::Bytes\">Bytes</a></h4></section></summary><div class='docblock'>Serialize this value into X11 raw bytes.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize_into\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#518\">source</a><a href=\"#method.serialize_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"x11rb/x11_utils/trait.Serialize.html#tymethod.serialize_into\" class=\"fn\">serialize_into</a>(&amp;self, bytes: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>&gt;)</h4></section></summary><div class='docblock'>Serialize this value into X11 raw bytes, appending the result into <code>bytes</code>. <a href=\"x11rb/x11_utils/trait.Serialize.html#tymethod.serialize_into\">Read more</a></div></details></div></details>","Serialize","x11rb::connection::BufWithFds","x11rb::connection::EventAndSeqNumber","x11rb::connection::RawEventAndSeqNumber"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryParse-for-(A,+B)\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#518\">source</a><a href=\"#impl-TryParse-for-(A,+B)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A, B&gt; <a class=\"trait\" href=\"x11rb/x11_utils/trait.TryParse.html\" title=\"trait x11rb::x11_utils::TryParse\">TryParse</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.tuple.html\">(A, B)</a><div class=\"where\">where\n    A: <a class=\"trait\" href=\"x11rb/x11_utils/trait.TryParse.html\" title=\"trait x11rb::x11_utils::TryParse\">TryParse</a>,\n    B: <a class=\"trait\" href=\"x11rb/x11_utils/trait.TryParse.html\" title=\"trait x11rb::x11_utils::TryParse\">TryParse</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_parse\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#518\">source</a><a href=\"#method.try_parse\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"x11rb/x11_utils/trait.TryParse.html#tymethod.try_parse\" class=\"fn\">try_parse</a>(remaining: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.tuple.html\">(A, B)</a>, &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>]), <a class=\"enum\" href=\"x11rb/rust_connection/enum.ParseError.html\" title=\"enum x11rb::rust_connection::ParseError\">ParseError</a>&gt;</h4></section></summary><div class='docblock'>Try to parse the given values into an instance of this type. <a href=\"x11rb/x11_utils/trait.TryParse.html#tymethod.try_parse\">Read more</a></div></details></div></details>","TryParse","x11rb::connection::BufWithFds","x11rb::connection::EventAndSeqNumber","x11rb::connection::RawEventAndSeqNumber"]]],["x11rb_protocol",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-(A,+B)\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#518\">source</a><a href=\"#impl-Serialize-for-(A,+B)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A, B&gt; <a class=\"trait\" href=\"x11rb_protocol/x11_utils/trait.Serialize.html\" title=\"trait x11rb_protocol::x11_utils::Serialize\">Serialize</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.tuple.html\">(A, B)</a><div class=\"where\">where\n    A: <a class=\"trait\" href=\"x11rb_protocol/x11_utils/trait.Serialize.html\" title=\"trait x11rb_protocol::x11_utils::Serialize\">Serialize</a>,\n    B: <a class=\"trait\" href=\"x11rb_protocol/x11_utils/trait.Serialize.html\" title=\"trait x11rb_protocol::x11_utils::Serialize\">Serialize</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Bytes\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#518\">source</a><a href=\"#associatedtype.Bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"x11rb_protocol/x11_utils/trait.Serialize.html#associatedtype.Bytes\" class=\"associatedtype\">Bytes</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>&gt;</h4></section></summary><div class='docblock'>The value returned by <code>serialize</code>. <a href=\"x11rb_protocol/x11_utils/trait.Serialize.html#associatedtype.Bytes\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#518\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"x11rb_protocol/x11_utils/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>(&amp;self) -&gt; Self::<a class=\"associatedtype\" href=\"x11rb_protocol/x11_utils/trait.Serialize.html#associatedtype.Bytes\" title=\"type x11rb_protocol::x11_utils::Serialize::Bytes\">Bytes</a></h4></section></summary><div class='docblock'>Serialize this value into X11 raw bytes.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize_into\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#518\">source</a><a href=\"#method.serialize_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"x11rb_protocol/x11_utils/trait.Serialize.html#tymethod.serialize_into\" class=\"fn\">serialize_into</a>(&amp;self, bytes: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>&gt;)</h4></section></summary><div class='docblock'>Serialize this value into X11 raw bytes, appending the result into <code>bytes</code>. <a href=\"x11rb_protocol/x11_utils/trait.Serialize.html#tymethod.serialize_into\">Read more</a></div></details></div></details>","Serialize","x11rb_protocol::BufWithFds","x11rb_protocol::RawEventAndSeqNumber"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryParse-for-(A,+B)\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#518\">source</a><a href=\"#impl-TryParse-for-(A,+B)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A, B&gt; <a class=\"trait\" href=\"x11rb_protocol/x11_utils/trait.TryParse.html\" title=\"trait x11rb_protocol::x11_utils::TryParse\">TryParse</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.tuple.html\">(A, B)</a><div class=\"where\">where\n    A: <a class=\"trait\" href=\"x11rb_protocol/x11_utils/trait.TryParse.html\" title=\"trait x11rb_protocol::x11_utils::TryParse\">TryParse</a>,\n    B: <a class=\"trait\" href=\"x11rb_protocol/x11_utils/trait.TryParse.html\" title=\"trait x11rb_protocol::x11_utils::TryParse\">TryParse</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_parse\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#518\">source</a><a href=\"#method.try_parse\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"x11rb_protocol/x11_utils/trait.TryParse.html#tymethod.try_parse\" class=\"fn\">try_parse</a>(remaining: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.tuple.html\">(A, B)</a>, &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>]), <a class=\"enum\" href=\"x11rb_protocol/errors/enum.ParseError.html\" title=\"enum x11rb_protocol::errors::ParseError\">ParseError</a>&gt;</h4></section></summary><div class='docblock'>Try to parse the given values into an instance of this type. <a href=\"x11rb_protocol/x11_utils/trait.TryParse.html#tymethod.try_parse\">Read more</a></div></details></div></details>","TryParse","x11rb_protocol::BufWithFds","x11rb_protocol::RawEventAndSeqNumber"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[12,20,5839,5717]}