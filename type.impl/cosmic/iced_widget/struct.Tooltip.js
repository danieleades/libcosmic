(function() {
    var type_impls = Object.fromEntries([["cosmic",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Tooltip%3C'a,+Message,+Theme,+Renderer%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_widget/tooltip.rs.html#79-82\">source</a><a href=\"#impl-Tooltip%3C'a,+Message,+Theme,+Renderer%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Message, Theme, Renderer&gt; <a class=\"struct\" href=\"cosmic/iced_widget/struct.Tooltip.html\" title=\"struct cosmic::iced_widget::Tooltip\">Tooltip</a>&lt;'a, Message, Theme, Renderer&gt;<div class=\"where\">where\n    Theme: <a class=\"trait\" href=\"cosmic/iced_widget/container/trait.Catalog.html\" title=\"trait cosmic::iced_widget::container::Catalog\">Catalog</a>,\n    Renderer: <a class=\"trait\" href=\"cosmic/iced_winit/graphics/core/text/trait.Renderer.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Renderer\">Renderer</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_widget/tooltip.rs.html#90-94\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_widget/struct.Tooltip.html#tymethod.new\" class=\"fn\">new</a>(\n    content: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Element.html\" title=\"struct cosmic::iced_winit::graphics::core::Element\">Element</a>&lt;'a, Message, Theme, Renderer&gt;&gt;,\n    tooltip: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Element.html\" title=\"struct cosmic::iced_winit::graphics::core::Element\">Element</a>&lt;'a, Message, Theme, Renderer&gt;&gt;,\n    position: <a class=\"enum\" href=\"cosmic/iced_widget/tooltip/enum.Position.html\" title=\"enum cosmic::iced_widget::tooltip::Position\">Position</a>,\n) -&gt; <a class=\"struct\" href=\"cosmic/iced_widget/struct.Tooltip.html\" title=\"struct cosmic::iced_widget::Tooltip\">Tooltip</a>&lt;'a, Message, Theme, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new <a href=\"struct.Tooltip.html\"><code>Tooltip</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.gap\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_widget/tooltip.rs.html#107\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_widget/struct.Tooltip.html#tymethod.gap\" class=\"fn\">gap</a>(\n    self,\n    gap: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Pixels.html\" title=\"struct cosmic::iced_winit::graphics::core::Pixels\">Pixels</a>&gt;,\n) -&gt; <a class=\"struct\" href=\"cosmic/iced_widget/struct.Tooltip.html\" title=\"struct cosmic::iced_widget::Tooltip\">Tooltip</a>&lt;'a, Message, Theme, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Sets the gap between the content and its <a href=\"cosmic/iced_widget/struct.Tooltip.html\" title=\"struct cosmic::iced_widget::Tooltip\"><code>Tooltip</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.padding\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_widget/tooltip.rs.html#113\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_widget/struct.Tooltip.html#tymethod.padding\" class=\"fn\">padding</a>(\n    self,\n    padding: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Pixels.html\" title=\"struct cosmic::iced_winit::graphics::core::Pixels\">Pixels</a>&gt;,\n) -&gt; <a class=\"struct\" href=\"cosmic/iced_widget/struct.Tooltip.html\" title=\"struct cosmic::iced_widget::Tooltip\">Tooltip</a>&lt;'a, Message, Theme, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Sets the padding of the <a href=\"cosmic/iced_widget/struct.Tooltip.html\" title=\"struct cosmic::iced_widget::Tooltip\"><code>Tooltip</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.snap_within_viewport\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_widget/tooltip.rs.html#119\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_widget/struct.Tooltip.html#tymethod.snap_within_viewport\" class=\"fn\">snap_within_viewport</a>(\n    self,\n    snap: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.bool.html\">bool</a>,\n) -&gt; <a class=\"struct\" href=\"cosmic/iced_widget/struct.Tooltip.html\" title=\"struct cosmic::iced_widget::Tooltip\">Tooltip</a>&lt;'a, Message, Theme, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Sets whether the <a href=\"cosmic/iced_widget/struct.Tooltip.html\" title=\"struct cosmic::iced_widget::Tooltip\"><code>Tooltip</code></a> is snapped within the viewport.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.style\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_widget/tooltip.rs.html#126-131\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_widget/struct.Tooltip.html#tymethod.style\" class=\"fn\">style</a>(\n    self,\n    style: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;Theme</a>) -&gt; <a class=\"struct\" href=\"cosmic/iced_widget/container/struct.Style.html\" title=\"struct cosmic::iced_widget::container::Style\">Style</a> + 'a,\n) -&gt; <a class=\"struct\" href=\"cosmic/iced_widget/struct.Tooltip.html\" title=\"struct cosmic::iced_widget::Tooltip\">Tooltip</a>&lt;'a, Message, Theme, Renderer&gt;<div class=\"where\">where\n    &lt;Theme as <a class=\"trait\" href=\"cosmic/iced_widget/container/trait.Catalog.html\" title=\"trait cosmic::iced_widget::container::Catalog\">Catalog</a>&gt;::<a class=\"associatedtype\" href=\"cosmic/iced_widget/container/trait.Catalog.html#associatedtype.Class\" title=\"type cosmic::iced_widget::container::Catalog::Class\">Class</a>&lt;'a&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;Theme</a>) -&gt; <a class=\"struct\" href=\"cosmic/iced_widget/container/struct.Style.html\" title=\"struct cosmic::iced_widget::container::Style\">Style</a> + 'a&gt;&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Sets the style of the <a href=\"cosmic/iced_widget/struct.Tooltip.html\" title=\"struct cosmic::iced_widget::Tooltip\"><code>Tooltip</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.class\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_widget/tooltip.rs.html#140\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_widget/struct.Tooltip.html#tymethod.class\" class=\"fn\">class</a>(\n    self,\n    class: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;&lt;Theme as <a class=\"trait\" href=\"cosmic/iced_widget/container/trait.Catalog.html\" title=\"trait cosmic::iced_widget::container::Catalog\">Catalog</a>&gt;::<a class=\"associatedtype\" href=\"cosmic/iced_widget/container/trait.Catalog.html#associatedtype.Class\" title=\"type cosmic::iced_widget::container::Catalog::Class\">Class</a>&lt;'a&gt;&gt;,\n) -&gt; <a class=\"struct\" href=\"cosmic/iced_widget/struct.Tooltip.html\" title=\"struct cosmic::iced_widget::Tooltip\">Tooltip</a>&lt;'a, Message, Theme, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Sets the style class of the <a href=\"cosmic/iced_widget/struct.Tooltip.html\" title=\"struct cosmic::iced_widget::Tooltip\"><code>Tooltip</code></a>.</p>\n</div></details></div></details>",0,"cosmic::widget::tooltip::Tooltip"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Widget%3CMessage,+Theme,+Renderer%3E-for-Tooltip%3C'a,+Message,+Theme,+Renderer%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_widget/tooltip.rs.html#146-150\">source</a><a href=\"#impl-Widget%3CMessage,+Theme,+Renderer%3E-for-Tooltip%3C'a,+Message,+Theme,+Renderer%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Message, Theme, Renderer&gt; <a class=\"trait\" href=\"cosmic/iced_winit/graphics/core/trait.Widget.html\" title=\"trait cosmic::iced_winit::graphics::core::Widget\">Widget</a>&lt;Message, Theme, Renderer&gt; for <a class=\"struct\" href=\"cosmic/iced_widget/struct.Tooltip.html\" title=\"struct cosmic::iced_widget::Tooltip\">Tooltip</a>&lt;'a, Message, Theme, Renderer&gt;<div class=\"where\">where\n    Theme: <a class=\"trait\" href=\"cosmic/iced_widget/container/trait.Catalog.html\" title=\"trait cosmic::iced_widget::container::Catalog\">Catalog</a>,\n    Renderer: <a class=\"trait\" href=\"cosmic/iced_winit/graphics/core/text/trait.Renderer.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Renderer\">Renderer</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.children\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/tooltip.rs.html#152\">source</a><a href=\"#method.children\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.children\" class=\"fn\">children</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/widget/struct.Tree.html\" title=\"struct cosmic::iced_winit::graphics::core::widget::Tree\">Tree</a>&gt;</h4></section></summary><div class='docblock'>Returns the state <a href=\"cosmic/iced_winit/graphics/core/widget/struct.Tree.html\" title=\"struct cosmic::iced_winit::graphics::core::widget::Tree\"><code>Tree</code></a> of the children of the <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html\" title=\"trait cosmic::iced_winit::graphics::core::Widget\"><code>Widget</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.state\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/tooltip.rs.html#159\">source</a><a href=\"#method.state\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.state\" class=\"fn\">state</a>(&amp;self) -&gt; <a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/widget/tree/enum.State.html\" title=\"enum cosmic::iced_winit::graphics::core::widget::tree::State\">State</a></h4></section></summary><div class='docblock'>Returns the <a href=\"cosmic/iced_winit/graphics/core/widget/tree/enum.State.html\" title=\"enum cosmic::iced_winit::graphics::core::widget::tree::State\"><code>State</code></a> of the <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html\" title=\"trait cosmic::iced_winit::graphics::core::Widget\"><code>Widget</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.tag\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/tooltip.rs.html#163\">source</a><a href=\"#method.tag\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.tag\" class=\"fn\">tag</a>(&amp;self) -&gt; <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/widget/tree/struct.Tag.html\" title=\"struct cosmic::iced_winit::graphics::core::widget::tree::Tag\">Tag</a></h4></section></summary><div class='docblock'>Returns the <a href=\"cosmic/iced_winit/graphics/core/widget/tree/struct.Tag.html\" title=\"struct cosmic::iced_winit::graphics::core::widget::tree::Tag\"><code>Tag</code></a> of the <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html\" title=\"trait cosmic::iced_winit::graphics::core::Widget\"><code>Widget</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/tooltip.rs.html#167\">source</a><a href=\"#method.size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#tymethod.size\" class=\"fn\">size</a>(&amp;self) -&gt; <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Size.html\" title=\"struct cosmic::iced_winit::graphics::core::Size\">Size</a>&lt;<a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/enum.Length.html\" title=\"enum cosmic::iced_winit::graphics::core::Length\">Length</a>&gt;</h4></section></summary><div class='docblock'>Returns the <a href=\"cosmic/iced_winit/graphics/core/struct.Size.html\" title=\"struct cosmic::iced_winit::graphics::core::Size\"><code>Size</code></a> of the <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html\" title=\"trait cosmic::iced_winit::graphics::core::Widget\"><code>Widget</code></a> in lengths.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/tooltip.rs.html#171\">source</a><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.size_hint\" class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Size.html\" title=\"struct cosmic::iced_winit::graphics::core::Size\">Size</a>&lt;<a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/enum.Length.html\" title=\"enum cosmic::iced_winit::graphics::core::Length\">Length</a>&gt;</h4></section></summary><div class='docblock'>Returns a <a href=\"cosmic/iced_winit/graphics/core/struct.Size.html\" title=\"struct cosmic::iced_winit::graphics::core::Size\"><code>Size</code></a> hint for laying out the <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html\" title=\"trait cosmic::iced_winit::graphics::core::Widget\"><code>Widget</code></a>. <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.size_hint\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.diff\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/tooltip.rs.html#175\">source</a><a href=\"#method.diff\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.diff\" class=\"fn\">diff</a>(&amp;mut self, tree: &amp;mut <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/widget/struct.Tree.html\" title=\"struct cosmic::iced_winit::graphics::core::widget::Tree\">Tree</a>)</h4></section></summary><div class='docblock'>Reconciliates the <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html\" title=\"trait cosmic::iced_winit::graphics::core::Widget\"><code>Widget</code></a> with the provided <a href=\"cosmic/iced_winit/graphics/core/widget/struct.Tree.html\" title=\"struct cosmic::iced_winit::graphics::core::widget::Tree\"><code>Tree</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.layout\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/tooltip.rs.html#182-187\">source</a><a href=\"#method.layout\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#tymethod.layout\" class=\"fn\">layout</a>(&amp;self, tree: &amp;mut <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/widget/struct.Tree.html\" title=\"struct cosmic::iced_winit::graphics::core::widget::Tree\">Tree</a>, renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;Renderer</a>, limits: &amp;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/layout/struct.Limits.html\" title=\"struct cosmic::iced_winit::graphics::core::layout::Limits\">Limits</a>) -&gt; <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/layout/struct.Node.html\" title=\"struct cosmic::iced_winit::graphics::core::layout::Node\">Node</a></h4></section></summary><div class='docblock'>Returns the <a href=\"cosmic/iced_winit/graphics/core/layout/struct.Node.html\" title=\"struct cosmic::iced_winit::graphics::core::layout::Node\"><code>layout::Node</code></a> of the <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html\" title=\"trait cosmic::iced_winit::graphics::core::Widget\"><code>Widget</code></a>. <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#tymethod.layout\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.on_event\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/tooltip.rs.html#193-203\">source</a><a href=\"#method.on_event\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.on_event\" class=\"fn\">on_event</a>(\n    &amp;mut self,\n    tree: &amp;mut <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/widget/struct.Tree.html\" title=\"struct cosmic::iced_winit::graphics::core::widget::Tree\">Tree</a>,\n    event: <a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/enum.Event.html\" title=\"enum cosmic::iced_winit::graphics::core::Event\">Event</a>,\n    layout: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Layout.html\" title=\"struct cosmic::iced_winit::graphics::core::Layout\">Layout</a>&lt;'_&gt;,\n    cursor: <a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/mouse/enum.Cursor.html\" title=\"enum cosmic::iced_winit::graphics::core::mouse::Cursor\">Cursor</a>,\n    renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;Renderer</a>,\n    clipboard: &amp;mut dyn <a class=\"trait\" href=\"cosmic/iced_winit/graphics/core/trait.Clipboard.html\" title=\"trait cosmic::iced_winit::graphics::core::Clipboard\">Clipboard</a>,\n    shell: &amp;mut <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Shell.html\" title=\"struct cosmic::iced_winit::graphics::core::Shell\">Shell</a>&lt;'_, Message&gt;,\n    viewport: &amp;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Rectangle.html\" title=\"struct cosmic::iced_winit::graphics::core::Rectangle\">Rectangle</a>,\n) -&gt; <a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/event/enum.Status.html\" title=\"enum cosmic::iced_winit::graphics::core::event::Status\">Status</a></h4></section></summary><div class='docblock'>Processes a runtime <a href=\"cosmic/iced_winit/graphics/core/enum.Event.html\" title=\"enum cosmic::iced_winit::graphics::core::Event\"><code>Event</code></a>. <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.on_event\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.mouse_interaction\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/tooltip.rs.html#231-238\">source</a><a href=\"#method.mouse_interaction\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.mouse_interaction\" class=\"fn\">mouse_interaction</a>(\n    &amp;self,\n    tree: &amp;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/widget/struct.Tree.html\" title=\"struct cosmic::iced_winit::graphics::core::widget::Tree\">Tree</a>,\n    layout: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Layout.html\" title=\"struct cosmic::iced_winit::graphics::core::Layout\">Layout</a>&lt;'_&gt;,\n    cursor: <a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/mouse/enum.Cursor.html\" title=\"enum cosmic::iced_winit::graphics::core::mouse::Cursor\">Cursor</a>,\n    viewport: &amp;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Rectangle.html\" title=\"struct cosmic::iced_winit::graphics::core::Rectangle\">Rectangle</a>,\n    renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;Renderer</a>,\n) -&gt; <a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/mouse/enum.Interaction.html\" title=\"enum cosmic::iced_winit::graphics::core::mouse::Interaction\">Interaction</a></h4></section></summary><div class='docblock'>Returns the current <a href=\"cosmic/iced_winit/graphics/core/mouse/enum.Interaction.html\" title=\"enum cosmic::iced_winit::graphics::core::mouse::Interaction\"><code>mouse::Interaction</code></a> of the <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html\" title=\"trait cosmic::iced_winit::graphics::core::Widget\"><code>Widget</code></a>. <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.mouse_interaction\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.draw\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/tooltip.rs.html#248-257\">source</a><a href=\"#method.draw\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#tymethod.draw\" class=\"fn\">draw</a>(\n    &amp;self,\n    tree: &amp;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/widget/struct.Tree.html\" title=\"struct cosmic::iced_winit::graphics::core::widget::Tree\">Tree</a>,\n    renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;mut Renderer</a>,\n    theme: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;Theme</a>,\n    inherited_style: &amp;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/renderer/struct.Style.html\" title=\"struct cosmic::iced_winit::graphics::core::renderer::Style\">Style</a>,\n    layout: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Layout.html\" title=\"struct cosmic::iced_winit::graphics::core::Layout\">Layout</a>&lt;'_&gt;,\n    cursor: <a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/mouse/enum.Cursor.html\" title=\"enum cosmic::iced_winit::graphics::core::mouse::Cursor\">Cursor</a>,\n    viewport: &amp;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Rectangle.html\" title=\"struct cosmic::iced_winit::graphics::core::Rectangle\">Rectangle</a>,\n)</h4></section></summary><div class='docblock'>Draws the <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html\" title=\"trait cosmic::iced_winit::graphics::core::Widget\"><code>Widget</code></a> using the associated <code>Renderer</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.overlay\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/tooltip.rs.html#269-275\">source</a><a href=\"#method.overlay\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.overlay\" class=\"fn\">overlay</a>&lt;'b&gt;(\n    &amp;'b mut self,\n    tree: &amp;'b mut <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/widget/struct.Tree.html\" title=\"struct cosmic::iced_winit::graphics::core::widget::Tree\">Tree</a>,\n    layout: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Layout.html\" title=\"struct cosmic::iced_winit::graphics::core::Layout\">Layout</a>&lt;'_&gt;,\n    renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;Renderer</a>,\n    translation: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Vector.html\" title=\"struct cosmic::iced_winit::graphics::core::Vector\">Vector</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/overlay/struct.Element.html\" title=\"struct cosmic::iced_winit::graphics::core::overlay::Element\">Element</a>&lt;'b, Message, Theme, Renderer&gt;&gt;</h4></section></summary><div class='docblock'>Returns the overlay of the <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html\" title=\"trait cosmic::iced_winit::graphics::core::Widget\"><code>Widget</code></a>, if there is any.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.operate\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#101-107\">source</a><a href=\"#method.operate\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.operate\" class=\"fn\">operate</a>(\n    &amp;self,\n    _state: &amp;mut <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/widget/struct.Tree.html\" title=\"struct cosmic::iced_winit::graphics::core::widget::Tree\">Tree</a>,\n    _layout: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Layout.html\" title=\"struct cosmic::iced_winit::graphics::core::Layout\">Layout</a>&lt;'_&gt;,\n    _renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;Renderer</a>,\n    _operation: &amp;mut dyn <a class=\"trait\" href=\"cosmic/iced_winit/graphics/core/widget/trait.Operation.html\" title=\"trait cosmic::iced_winit::graphics::core::widget::Operation\">Operation</a>,\n)</h4></section></summary><div class='docblock'>Applies an <a href=\"cosmic/iced_winit/graphics/core/widget/trait.Operation.html\" title=\"trait cosmic::iced_winit::graphics::core::widget::Operation\"><code>Operation</code></a> to the <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html\" title=\"trait cosmic::iced_winit::graphics::core::Widget\"><code>Widget</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.a11y_nodes\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#154-159\">source</a><a href=\"#method.a11y_nodes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.a11y_nodes\" class=\"fn\">a11y_nodes</a>(\n    &amp;self,\n    _layout: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Layout.html\" title=\"struct cosmic::iced_winit::graphics::core::Layout\">Layout</a>&lt;'_&gt;,\n    _state: &amp;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/widget/struct.Tree.html\" title=\"struct cosmic::iced_winit::graphics::core::widget::Tree\">Tree</a>,\n    _cursor: <a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/mouse/enum.Cursor.html\" title=\"enum cosmic::iced_winit::graphics::core::mouse::Cursor\">Cursor</a>,\n) -&gt; <a class=\"struct\" href=\"iced_accessibility/a11y_tree/struct.A11yTree.html\" title=\"struct iced_accessibility::a11y_tree::A11yTree\">A11yTree</a></h4></section></summary><div class='docblock'>get the a11y nodes for the widget and its children</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.id\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#164\">source</a><a href=\"#method.id\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.id\" class=\"fn\">id</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/id/struct.Id.html\" title=\"struct cosmic::iced_winit::graphics::core::id::Id\">Id</a>&gt;</h4></section></summary><div class='docblock'>Returns the id of the widget</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_id\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#170\">source</a><a href=\"#method.set_id\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.set_id\" class=\"fn\">set_id</a>(&amp;mut self, _id: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/id/struct.Id.html\" title=\"struct cosmic::iced_winit::graphics::core::id::Id\">Id</a>)</h4></section></summary><div class='docblock'>Sets the id of the widget\nThis may be called while diffing the widget tree</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.drag_destinations\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#174-180\">source</a><a href=\"#method.drag_destinations\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.drag_destinations\" class=\"fn\">drag_destinations</a>(\n    &amp;self,\n    _state: &amp;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/widget/struct.Tree.html\" title=\"struct cosmic::iced_winit::graphics::core::widget::Tree\">Tree</a>,\n    _layout: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Layout.html\" title=\"struct cosmic::iced_winit::graphics::core::Layout\">Layout</a>&lt;'_&gt;,\n    _renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;Renderer</a>,\n    _dnd_rectangles: &amp;mut <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/clipboard/struct.DndDestinationRectangles.html\" title=\"struct cosmic::iced_winit::graphics::core::clipboard::DndDestinationRectangles\">DndDestinationRectangles</a>,\n)</h4></section></summary><div class='docblock'>Adds the drag destination rectangles of the widget.\nRuns after the layout phase for each widget in the tree.</div></details></div></details>","Widget<Message, Theme, Renderer>","cosmic::widget::tooltip::Tooltip"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[31030]}