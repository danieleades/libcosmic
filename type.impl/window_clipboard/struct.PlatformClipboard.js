(function() {
    var type_impls = Object.fromEntries([["window_clipboard",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DndProvider-for-PlatformClipboard%3CC%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/window_clipboard/dnd/mod.rs.html#55-102\">source</a><a href=\"#impl-DndProvider-for-PlatformClipboard%3CC%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C: <a class=\"trait\" href=\"window_clipboard/dnd/trait.DndProvider.html\" title=\"trait window_clipboard::dnd::DndProvider\">DndProvider</a>&gt; <a class=\"trait\" href=\"window_clipboard/dnd/trait.DndProvider.html\" title=\"trait window_clipboard::dnd::DndProvider\">DndProvider</a> for <a class=\"struct\" href=\"window_clipboard/struct.PlatformClipboard.html\" title=\"struct window_clipboard::PlatformClipboard\">PlatformClipboard</a>&lt;C&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.init_dnd\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/window_clipboard/dnd/mod.rs.html#56-61\">source</a><a href=\"#method.init_dnd\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"window_clipboard/dnd/trait.DndProvider.html#method.init_dnd\" class=\"fn\">init_dnd</a>(&amp;self, tx: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"dnd/trait.Sender.html\" title=\"trait dnd::Sender\">Sender</a>&lt;<a class=\"struct\" href=\"dnd/struct.DndSurface.html\" title=\"struct dnd::DndSurface\">DndSurface</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static&gt;)</h4></section></summary><div class='docblock'>Set up DnD operations for the Clipboard</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.start_dnd\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/window_clipboard/dnd/mod.rs.html#63-78\">source</a><a href=\"#method.start_dnd\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"window_clipboard/dnd/trait.DndProvider.html#method.start_dnd\" class=\"fn\">start_dnd</a>&lt;D: <a class=\"trait\" href=\"mime/trait.AsMimeTypes.html\" title=\"trait mime::AsMimeTypes\">AsMimeTypes</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static&gt;(\n    &amp;self,\n    internal: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.bool.html\">bool</a>,\n    source_surface: <a class=\"struct\" href=\"dnd/struct.DndSurface.html\" title=\"struct dnd::DndSurface\">DndSurface</a>,\n    icon_surface: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"dnd/enum.Icon.html\" title=\"enum dnd::Icon\">Icon</a>&gt;,\n    content: D,\n    actions: <a class=\"struct\" href=\"dnd/struct.DndAction.html\" title=\"struct dnd::DndAction\">DndAction</a>,\n)</h4></section></summary><div class='docblock'>Start a DnD operation on the given surface with some data</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.end_dnd\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/window_clipboard/dnd/mod.rs.html#80-82\">source</a><a href=\"#method.end_dnd\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"window_clipboard/dnd/trait.DndProvider.html#method.end_dnd\" class=\"fn\">end_dnd</a>(&amp;self)</h4></section></summary><div class='docblock'>End the current DnD operation, if there is one</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.register_dnd_destination\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/window_clipboard/dnd/mod.rs.html#84-90\">source</a><a href=\"#method.register_dnd_destination\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"window_clipboard/dnd/trait.DndProvider.html#method.register_dnd_destination\" class=\"fn\">register_dnd_destination</a>(\n    &amp;self,\n    surface: <a class=\"struct\" href=\"dnd/struct.DndSurface.html\" title=\"struct dnd::DndSurface\">DndSurface</a>,\n    rectangles: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"dnd/struct.DndDestinationRectangle.html\" title=\"struct dnd::DndDestinationRectangle\">DndDestinationRectangle</a>&gt;,\n)</h4></section></summary><div class='docblock'>Register a surface for receiving DnD offers\nRectangles should be provided in order of decreasing priority.\nThis method can be called multiple time for a single surface if the\nrectangles change.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_action\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/window_clipboard/dnd/mod.rs.html#92-94\">source</a><a href=\"#method.set_action\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"window_clipboard/dnd/trait.DndProvider.html#method.set_action\" class=\"fn\">set_action</a>(&amp;self, action: <a class=\"struct\" href=\"dnd/struct.DndAction.html\" title=\"struct dnd::DndAction\">DndAction</a>)</h4></section></summary><div class='docblock'>Set the final action after presenting the user with a choice</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.peek_offer\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/window_clipboard/dnd/mod.rs.html#96-101\">source</a><a href=\"#method.peek_offer\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"window_clipboard/dnd/trait.DndProvider.html#method.peek_offer\" class=\"fn\">peek_offer</a>&lt;D: <a class=\"trait\" href=\"mime/trait.AllowedMimeTypes.html\" title=\"trait mime::AllowedMimeTypes\">AllowedMimeTypes</a> + 'static&gt;(\n    &amp;self,\n    mime_type: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'static, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.str.html\">str</a>&gt;&gt;,\n) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.83.0/std/io/error/type.Result.html\" title=\"type std::io::error::Result\">Result</a>&lt;D&gt;</h4></section></summary><div class='docblock'>Peek at the contents of a DnD offer</div></details></div></details>","DndProvider","window_clipboard::Clipboard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PlatformClipboard%3CC%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/window_clipboard/lib.rs.html#82-143\">source</a><a href=\"#impl-PlatformClipboard%3CC%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C: <a class=\"trait\" href=\"window_clipboard/trait.ClipboardProvider.html\" title=\"trait window_clipboard::ClipboardProvider\">ClipboardProvider</a>&gt; <a class=\"struct\" href=\"window_clipboard/struct.PlatformClipboard.html\" title=\"struct window_clipboard::PlatformClipboard\">PlatformClipboard</a>&lt;C&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.read_primary\" class=\"method\"><a class=\"src rightside\" href=\"src/window_clipboard/lib.rs.html#83-85\">source</a><h4 class=\"code-header\">pub fn <a href=\"window_clipboard/struct.PlatformClipboard.html#tymethod.read_primary\" class=\"fn\">read_primary</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>&gt;&gt;&gt;</h4></section><section id=\"method.write_primary\" class=\"method\"><a class=\"src rightside\" href=\"src/window_clipboard/lib.rs.html#87-92\">source</a><h4 class=\"code-header\">pub fn <a href=\"window_clipboard/struct.PlatformClipboard.html#tymethod.write_primary\" class=\"fn\">write_primary</a>(\n    &amp;mut self,\n    contents: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>&gt;&gt;&gt;</h4></section><section id=\"method.read_data\" class=\"method\"><a class=\"src rightside\" href=\"src/window_clipboard/lib.rs.html#94-99\">source</a><h4 class=\"code-header\">pub fn <a href=\"window_clipboard/struct.PlatformClipboard.html#tymethod.read_data\" class=\"fn\">read_data</a>&lt;T&gt;(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>&gt;&gt;&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"mime/trait.AllowedMimeTypes.html\" title=\"trait mime::AllowedMimeTypes\">AllowedMimeTypes</a> + 'static,</div></h4></section><section id=\"method.write_data\" class=\"method\"><a class=\"src rightside\" href=\"src/window_clipboard/lib.rs.html#101-109\">source</a><h4 class=\"code-header\">pub fn <a href=\"window_clipboard/struct.PlatformClipboard.html#tymethod.write_data\" class=\"fn\">write_data</a>&lt;T&gt;(\n    &amp;mut self,\n    contents: <a class=\"struct\" href=\"mime/struct.ClipboardStoreData.html\" title=\"struct mime::ClipboardStoreData\">ClipboardStoreData</a>&lt;T&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>&gt;&gt;&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"mime/trait.AsMimeTypes.html\" title=\"trait mime::AsMimeTypes\">AsMimeTypes</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</div></h4></section><section id=\"method.read_primary_data\" class=\"method\"><a class=\"src rightside\" href=\"src/window_clipboard/lib.rs.html#111-118\">source</a><h4 class=\"code-header\">pub fn <a href=\"window_clipboard/struct.PlatformClipboard.html#tymethod.read_primary_data\" class=\"fn\">read_primary_data</a>&lt;T&gt;(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>&gt;&gt;&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"mime/trait.AllowedMimeTypes.html\" title=\"trait mime::AllowedMimeTypes\">AllowedMimeTypes</a> + 'static,</div></h4></section><section id=\"method.read_primary_raw\" class=\"method\"><a class=\"src rightside\" href=\"src/window_clipboard/lib.rs.html#120-125\">source</a><h4 class=\"code-header\">pub fn <a href=\"window_clipboard/struct.PlatformClipboard.html#tymethod.read_primary_raw\" class=\"fn\">read_primary_raw</a>(\n    &amp;self,\n    allowed: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;(<a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>), <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>&gt;&gt;&gt;</h4></section><section id=\"method.read_raw\" class=\"method\"><a class=\"src rightside\" href=\"src/window_clipboard/lib.rs.html#127-132\">source</a><h4 class=\"code-header\">pub fn <a href=\"window_clipboard/struct.PlatformClipboard.html#tymethod.read_raw\" class=\"fn\">read_raw</a>(\n    &amp;self,\n    allowed: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;(<a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>), <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>&gt;&gt;&gt;</h4></section><section id=\"method.write_primary_data\" class=\"method\"><a class=\"src rightside\" href=\"src/window_clipboard/lib.rs.html#134-142\">source</a><h4 class=\"code-header\">pub fn <a href=\"window_clipboard/struct.PlatformClipboard.html#tymethod.write_primary_data\" class=\"fn\">write_primary_data</a>&lt;T&gt;(\n    &amp;mut self,\n    contents: <a class=\"struct\" href=\"mime/struct.ClipboardStoreData.html\" title=\"struct mime::ClipboardStoreData\">ClipboardStoreData</a>&lt;T&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>&gt;&gt;&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"mime/trait.AsMimeTypes.html\" title=\"trait mime::AsMimeTypes\">AsMimeTypes</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</div></h4></section></div></details>",0,"window_clipboard::Clipboard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PlatformClipboard%3CClipboard%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/window_clipboard/lib.rs.html#63-80\">source</a><a href=\"#impl-PlatformClipboard%3CClipboard%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"window_clipboard/struct.PlatformClipboard.html\" title=\"struct window_clipboard::PlatformClipboard\">PlatformClipboard</a>&lt;Clipboard&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.connect\" class=\"method\"><a class=\"src rightside\" href=\"src/window_clipboard/lib.rs.html#65-71\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"window_clipboard/struct.PlatformClipboard.html#tymethod.connect\" class=\"fn\">connect</a>&lt;W: <a class=\"trait\" href=\"raw_window_handle/borrowed/trait.HasDisplayHandle.html\" title=\"trait raw_window_handle::borrowed::HasDisplayHandle\">HasDisplayHandle</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    window: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;W</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Safety: the display handle must be valid for the lifetime of <code>Clipboard</code></p>\n</div></details><section id=\"method.read\" class=\"method\"><a class=\"src rightside\" href=\"src/window_clipboard/lib.rs.html#73-75\">source</a><h4 class=\"code-header\">pub fn <a href=\"window_clipboard/struct.PlatformClipboard.html#tymethod.read\" class=\"fn\">read</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>&gt;&gt;</h4></section><section id=\"method.write\" class=\"method\"><a class=\"src rightside\" href=\"src/window_clipboard/lib.rs.html#77-79\">source</a><h4 class=\"code-header\">pub fn <a href=\"window_clipboard/struct.PlatformClipboard.html#tymethod.write\" class=\"fn\">write</a>(&amp;mut self, contents: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>&gt;&gt;</h4></section></div></details>",0,"window_clipboard::Clipboard"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[22018]}