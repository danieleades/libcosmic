(function() {
    var type_impls = Object.fromEntries([["iced",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-RigidTransform3D%3CT,+Src,+Dst%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/euclid/rigid.rs.html#217\">source</a><a href=\"#impl-Clone-for-RigidTransform3D%3CT,+Src,+Dst%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, Src, Dst&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::RigidTransform3D\">RigidTransform3D</a>&lt;T, Src, Dst&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/euclid/rigid.rs.html#218\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::RigidTransform3D\">RigidTransform3D</a>&lt;T, Src, Dst&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.83.0/src/core/clone.rs.html#174\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","iced::widget::canvas::path::lyon_path::geom::euclid::default::RigidTransform3D"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-RigidTransform3D%3CT,+Src,+Dst%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/euclid/rigid.rs.html#192\">source</a><a href=\"#impl-Debug-for-RigidTransform3D%3CT,+Src,+Dst%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, Src, Dst&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::RigidTransform3D\">RigidTransform3D</a>&lt;T, Src, Dst&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/euclid/rigid.rs.html#193\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","iced::widget::canvas::path::lyon_path::geom::euclid::default::RigidTransform3D"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CRotation3D%3CT,+Src,+Dst%3E%3E-for-RigidTransform3D%3CT,+Src,+Dst%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/euclid/rigid.rs.html#245-246\">source</a><a href=\"#impl-From%3CRotation3D%3CT,+Src,+Dst%3E%3E-for-RigidTransform3D%3CT,+Src,+Dst%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, Src, Dst&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.Rotation3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::Rotation3D\">Rotation3D</a>&lt;T, Src, Dst&gt;&gt; for <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::RigidTransform3D\">RigidTransform3D</a>&lt;T, Src, Dst&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"num_traits/real/trait.Real.html\" title=\"trait num_traits::real::Real\">Real</a> + <a class=\"trait\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/approxeq/trait.ApproxEq.html\" title=\"trait iced::widget::canvas::path::lyon_path::geom::euclid::approxeq::ApproxEq\">ApproxEq</a>&lt;T&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/euclid/rigid.rs.html#248\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(rot: <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.Rotation3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::Rotation3D\">Rotation3D</a>&lt;T, Src, Dst&gt;) -&gt; <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::RigidTransform3D\">RigidTransform3D</a>&lt;T, Src, Dst&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Rotation3D<T, Src, Dst>>","iced::widget::canvas::path::lyon_path::geom::euclid::default::RigidTransform3D"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CVector3D%3CT,+Dst%3E%3E-for-RigidTransform3D%3CT,+Src,+Dst%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/euclid/rigid.rs.html#253\">source</a><a href=\"#impl-From%3CVector3D%3CT,+Dst%3E%3E-for-RigidTransform3D%3CT,+Src,+Dst%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, Src, Dst&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.Vector3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::Vector3D\">Vector3D</a>&lt;T, Dst&gt;&gt; for <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::RigidTransform3D\">RigidTransform3D</a>&lt;T, Src, Dst&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"num_traits/real/trait.Real.html\" title=\"trait num_traits::real::Real\">Real</a> + <a class=\"trait\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/approxeq/trait.ApproxEq.html\" title=\"trait iced::widget::canvas::path::lyon_path::geom::euclid::approxeq::ApproxEq\">ApproxEq</a>&lt;T&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/euclid/rigid.rs.html#254\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(t: <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.Vector3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::Vector3D\">Vector3D</a>&lt;T, Dst&gt;) -&gt; <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::RigidTransform3D\">RigidTransform3D</a>&lt;T, Src, Dst&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Vector3D<T, Dst>>","iced::widget::canvas::path::lyon_path::geom::euclid::default::RigidTransform3D"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-RigidTransform3D%3CT,+Src,+Dst%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/euclid/rigid.rs.html#208\">source</a><a href=\"#impl-Hash-for-RigidTransform3D%3CT,+Src,+Dst%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, Src, Dst&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::RigidTransform3D\">RigidTransform3D</a>&lt;T, Src, Dst&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/euclid/rigid.rs.html#209\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;H&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</div></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.83.0/src/core/hash/mod.rs.html#235-237\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;[Self], state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","iced::widget::canvas::path::lyon_path::geom::euclid::default::RigidTransform3D"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-RigidTransform3D%3CT,+Src,+Dst%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/euclid/rigid.rs.html#201\">source</a><a href=\"#impl-PartialEq-for-RigidTransform3D%3CT,+Src,+Dst%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, Src, Dst&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::RigidTransform3D\">RigidTransform3D</a>&lt;T, Src, Dst&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/euclid/rigid.rs.html#202\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::RigidTransform3D\">RigidTransform3D</a>&lt;T, Src, Dst&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.83.0/src/core/cmp.rs.html#261\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","iced::widget::canvas::path::lyon_path::geom::euclid::default::RigidTransform3D"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RigidTransform3D%3CT,+Src,+Dst%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/euclid/rigid.rs.html#32\">source</a><a href=\"#impl-RigidTransform3D%3CT,+Src,+Dst%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, Src, Dst&gt; <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::RigidTransform3D\">RigidTransform3D</a>&lt;T, Src, Dst&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/euclid/rigid.rs.html#35\">source</a><h4 class=\"code-header\">pub const fn <a href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html#tymethod.new\" class=\"fn\">new</a>(\n    rotation: <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.Rotation3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::Rotation3D\">Rotation3D</a>&lt;T, Src, Dst&gt;,\n    translation: <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.Vector3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::Vector3D\">Vector3D</a>&lt;T, Dst&gt;,\n) -&gt; <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::RigidTransform3D\">RigidTransform3D</a>&lt;T, Src, Dst&gt;</h4></section></summary><div class=\"docblock\"><p>Construct a new rigid transformation, where the <code>rotation</code> applies first</p>\n</div></details></div></details>",0,"iced::widget::canvas::path::lyon_path::geom::euclid::default::RigidTransform3D"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RigidTransform3D%3CT,+Src,+Dst%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/euclid/rigid.rs.html#43\">source</a><a href=\"#impl-RigidTransform3D%3CT,+Src,+Dst%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, Src, Dst&gt; <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::RigidTransform3D\">RigidTransform3D</a>&lt;T, Src, Dst&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.cast_unit\" class=\"method\"><a class=\"src rightside\" href=\"src/euclid/rigid.rs.html#44\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html#tymethod.cast_unit\" class=\"fn\">cast_unit</a>&lt;Src2, Dst2&gt;(&amp;self) -&gt; <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::RigidTransform3D\">RigidTransform3D</a>&lt;T, Src2, Dst2&gt;</h4></section></div></details>",0,"iced::widget::canvas::path::lyon_path::geom::euclid::default::RigidTransform3D"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RigidTransform3D%3CT,+Src,+Dst%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/euclid/rigid.rs.html#52\">source</a><a href=\"#impl-RigidTransform3D%3CT,+Src,+Dst%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, Src, Dst&gt; <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::RigidTransform3D\">RigidTransform3D</a>&lt;T, Src, Dst&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"num_traits/real/trait.Real.html\" title=\"trait num_traits::real::Real\">Real</a> + <a class=\"trait\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/approxeq/trait.ApproxEq.html\" title=\"trait iced::widget::canvas::path::lyon_path::geom::euclid::approxeq::ApproxEq\">ApproxEq</a>&lt;T&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.identity\" class=\"method\"><a class=\"src rightside\" href=\"src/euclid/rigid.rs.html#55\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html#tymethod.identity\" class=\"fn\">identity</a>() -&gt; <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::RigidTransform3D\">RigidTransform3D</a>&lt;T, Src, Dst&gt;</h4></section></summary><div class=\"docblock\"><p>Construct an identity transform</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_from_reversed\" class=\"method\"><a class=\"src rightside\" href=\"src/euclid/rigid.rs.html#64-67\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html#tymethod.new_from_reversed\" class=\"fn\">new_from_reversed</a>(\n    translation: <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.Vector3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::Vector3D\">Vector3D</a>&lt;T, Src&gt;,\n    rotation: <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.Rotation3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::Rotation3D\">Rotation3D</a>&lt;T, Src, Dst&gt;,\n) -&gt; <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::RigidTransform3D\">RigidTransform3D</a>&lt;T, Src, Dst&gt;</h4></section></summary><div class=\"docblock\"><p>Construct a new rigid transformation, where the <code>translation</code> applies first</p>\n</div></details><section id=\"method.from_rotation\" class=\"method\"><a class=\"src rightside\" href=\"src/euclid/rigid.rs.html#85\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html#tymethod.from_rotation\" class=\"fn\">from_rotation</a>(\n    rotation: <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.Rotation3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::Rotation3D\">Rotation3D</a>&lt;T, Src, Dst&gt;,\n) -&gt; <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::RigidTransform3D\">RigidTransform3D</a>&lt;T, Src, Dst&gt;</h4></section><section id=\"method.from_translation\" class=\"method\"><a class=\"src rightside\" href=\"src/euclid/rigid.rs.html#93\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html#tymethod.from_translation\" class=\"fn\">from_translation</a>(\n    translation: <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.Vector3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::Vector3D\">Vector3D</a>&lt;T, Dst&gt;,\n) -&gt; <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::RigidTransform3D\">RigidTransform3D</a>&lt;T, Src, Dst&gt;</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.decompose_reversed\" class=\"method\"><a class=\"src rightside\" href=\"src/euclid/rigid.rs.html#104\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html#tymethod.decompose_reversed\" class=\"fn\">decompose_reversed</a>(&amp;self) -&gt; (<a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.Vector3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::Vector3D\">Vector3D</a>&lt;T, Src&gt;, <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.Rotation3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::Rotation3D\">Rotation3D</a>&lt;T, Src, Dst&gt;)</h4></section></summary><div class=\"docblock\"><p>Decompose this into a translation and an rotation to be applied in the opposite order</p>\n<p>i.e., the translation is applied <em>first</em></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.then\" class=\"method\"><a class=\"src rightside\" href=\"src/euclid/rigid.rs.html#121-124\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html#tymethod.then\" class=\"fn\">then</a>&lt;Dst2&gt;(\n    &amp;self,\n    other: &amp;<a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::RigidTransform3D\">RigidTransform3D</a>&lt;T, Dst, Dst2&gt;,\n) -&gt; <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::RigidTransform3D\">RigidTransform3D</a>&lt;T, Src, Dst2&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the multiplication of the two transforms such that\nother’s transformation applies after self’s transformation.</p>\n<p>i.e., this produces <code>self * other</code> in row-vector notation</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.inverse\" class=\"method\"><a class=\"src rightside\" href=\"src/euclid/rigid.rs.html#148\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html#tymethod.inverse\" class=\"fn\">inverse</a>(&amp;self) -&gt; <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::RigidTransform3D\">RigidTransform3D</a>&lt;T, Dst, Src&gt;</h4></section></summary><div class=\"docblock\"><p>Inverts the transformation</p>\n</div></details><section id=\"method.to_transform\" class=\"method\"><a class=\"src rightside\" href=\"src/euclid/rigid.rs.html#164-166\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html#tymethod.to_transform\" class=\"fn\">to_transform</a>(&amp;self) -&gt; <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.Transform3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::Transform3D\">Transform3D</a>&lt;T, Src, Dst&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/trait.Trig.html\" title=\"trait iced::widget::canvas::path::lyon_path::geom::euclid::Trig\">Trig</a>,</div></h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_untyped\" class=\"method\"><a class=\"src rightside\" href=\"src/euclid/rigid.rs.html#175\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html#tymethod.to_untyped\" class=\"fn\">to_untyped</a>(&amp;self) -&gt; <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::RigidTransform3D\">RigidTransform3D</a>&lt;T, <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.UnknownUnit.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::UnknownUnit\">UnknownUnit</a>, <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.UnknownUnit.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::UnknownUnit\">UnknownUnit</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Drop the units, preserving only the numeric value.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_untyped\" class=\"method\"><a class=\"src rightside\" href=\"src/euclid/rigid.rs.html#184\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html#tymethod.from_untyped\" class=\"fn\">from_untyped</a>(\n    transform: &amp;<a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::RigidTransform3D\">RigidTransform3D</a>&lt;T, <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.UnknownUnit.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::UnknownUnit\">UnknownUnit</a>, <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.UnknownUnit.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::UnknownUnit\">UnknownUnit</a>&gt;,\n) -&gt; <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::RigidTransform3D\">RigidTransform3D</a>&lt;T, Src, Dst&gt;</h4></section></summary><div class=\"docblock\"><p>Tag a unitless value with units.</p>\n</div></details></div></details>",0,"iced::widget::canvas::path::lyon_path::geom::euclid::default::RigidTransform3D"],["<section id=\"impl-Copy-for-RigidTransform3D%3CT,+Src,+Dst%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/euclid/rigid.rs.html#215\">source</a><a href=\"#impl-Copy-for-RigidTransform3D%3CT,+Src,+Dst%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, Src, Dst&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::RigidTransform3D\">RigidTransform3D</a>&lt;T, Src, Dst&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div></h3></section>","Copy","iced::widget::canvas::path::lyon_path::geom::euclid::default::RigidTransform3D"],["<section id=\"impl-Eq-for-RigidTransform3D%3CT,+Src,+Dst%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/euclid/rigid.rs.html#206\">source</a><a href=\"#impl-Eq-for-RigidTransform3D%3CT,+Src,+Dst%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, Src, Dst&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"iced/widget/canvas/path/lyon_path/geom/euclid/struct.RigidTransform3D.html\" title=\"struct iced::widget::canvas::path::lyon_path::geom::euclid::RigidTransform3D\">RigidTransform3D</a>&lt;T, Src, Dst&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div></h3></section>","Eq","iced::widget::canvas::path::lyon_path::geom::euclid::default::RigidTransform3D"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[31836]}