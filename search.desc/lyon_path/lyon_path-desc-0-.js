searchState.loadedDescShard("lyon_path", 0, "Data structures and traits to work with paths (vector …\nFlag parameters for arcs as described by the SVG …\nAn alias for <code>usize</code>.\nA view over a contiguous storage of custom attributes.\nInterface for objects storing custom attributes associated …\nAn alias for a slice of <code>f32</code> values.\nA beveled corner is to be used to join path segments. The …\nThe stroke for each sub-path does not extend beyond its …\nID of a control point in a path.\nID of an endpoint point in a path.\nRepresents an event or edge of path.\nRefers to an event in a path.\nThe fill rule defines how to determine what is inside and …\nA path event representing endpoints and control points as …\nA view over a sequence of endpoint IDs forming a polygon.\nLine cap as defined by the SVG specification.\nLine join as defined by the SVG specification.\nA sharp corner is to be used to join path segments.\nSame as a miter join, but if the miter limit is exceeded, …\nAn empty attribute slice.\nA simple path data structure.\nAn object that stores multiple paths contiguously.\nA view on a <code>PathBuffer</code>.\nThe commands of a path encoded in a single array using IDs …\nA view over <code>PathCommands</code>.\nA path event representing endpoints and control points as …\nA view on a <code>Path</code>.\nA view over a sequence of endpoints forming a polygon.\nInterface for types types (typically endpoints and control …\nInterface for objects storing endpoints and control points …\nAt each end of each sub-path, the shape representing the …\nA round corner is to be used to join path segments.\nThe positive or negative side of a vector or segment.\nAt the end of each sub-path, the shape representing the …\nThe two possible orientations for the edges of a shape to …\nPath building utilities.\nA generic representation for paths that allow more control …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the endpoint’s custom attributes as a slice of …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTools to iterate over paths.\nOf the four candidate arc sweeps, two will represent an …\nf32 version of the lyon_geom types used everywhere. Most …\nReturns the number of float attributes per endpoint.\nThe default path data structure.\nA container to store multiple paths contiguously.\nSpecific path types for polygons.\nIf <code>sweep</code> is <code>true</code>, then the arc will be drawn in a “…\n<code>lyon_path</code> traits reexported here for convenience.\nThe radius of each corner of a rounded rectangle.\nBuilds a path.\nA Builder that approximates curves with successions of …\nA convenience wrapper for <code>PathBuilder</code> without custom …\nThe base path building interface.\nThe type of object that is created by this builder.\nA path building interface that tries to stay close to SVG…\nBuilds a path with a transformation applied.\nImplements an SVG-like building interface on top of a …\nAdds a sub-path containing a circle.\nAdds a sub-path containing a circle.\nAdds a sub-path containing an ellipse.\nAdds a sub-path containing an ellipse.\nAdds a sub-path containing a single line segment.\nAdds a sub-path containing a single line segment.\nAdds a sub-path containing a single point.\nAdds a sub-path containing a single point.\nAdds a sub-path from a polygon.\nAdds a sub-path from a polygon.\nAdds a sub-path from a polygon.\nAdds a sub-path containing a rectangle.\nAdds a sub-path containing a rectangle.\nAdds a sub-path containing a rectangle.\nAdds a sub-path containing a rectangle.\nAdds an elliptical arc.\nStarts a new sub-path at a given position.\nStarts a new sub-path at a given position.\nBuilds a path object, consuming the builder.\nBuilds a path object, consuming the builder.\nEnds the current sub-path by connecting it back to its …\nCloses the current sub path.\nCloses the current sub path.\nAdds a cubic bézier curve to the current sub-path.\nAdds a cubic bézier segment to the current sub-path.\nAdds a cubic bézier curve to the current sub-path.\nEnds the current sub path.\nEnds the current sub path.\nReturns a builder that approximates all curves with …\nReturns a builder that approximates all curves with …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nAdds an horizontal line segment.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAdds a line segment to the current sub-path.\nAdds a line segment to the current sub-path.\nAdds a line segment to the current sub-path.\nStart a new sub-path at the given position.\nApplies the provided path event.\nApplies the provided path event.\nAdds a quadratic bézier curve to the current sub-path.\nAdds a quadratic bézier segment to the current sub-path.\nAdds a quadratic bézier curve to the current sub-path.\nEquivalent to <code>arc_to</code> in relative coordinates.\nEquivalent to <code>cubic_bezier_to</code> in relative coordinates.\nAdds an horizontal line segment in relative coordinates.\nEquivalent to <code>line_to</code> in relative coordinates.\nEquivalent to <code>move_to</code> in relative coordinates.\nEquivalent to <code>quadratic_bezier_to</code> in relative coordinates.\nAdds a vertical line segment in relative coordinates.\nHints at the builder that a certain number of endpoints …\nHints at the builder that a certain number of endpoints …\nHints at the builder that a certain number of endpoints …\nEquivalent to <code>cubic_bezier_to</code> with implicit first control …\nEquivalent to <code>quadratic_bezier_to</code> with implicit control …\nEquivalent to <code>smooth_cubic_bezier_to</code> in relative …\nEquivalent to <code>smooth_quadratic_bezier_to</code> in relative …\nReturns a builder that applies the given transformation to …\nReturns a builder that applies the given transformation to …\nAdds a vertical line segment.\nReturns a builder that support SVG commands.\nReturns a builder that support SVG commands.\nA view on a <code>PathCommands</code> buffer and two slices for …\nAn iterator of <code>Event&lt;&amp;Endpoint, &amp;ControlPoint&gt;</code>.\nAn iterator of <code>Event&lt;&amp;Endpoint, &amp;ControlPoint&gt;</code>.\nThe commands of a path encoded in a single array using IDs …\nBuilds path commands.\nA view over <code>PathCommands</code>.\nAn iterator of <code>PathEvent</code>.\nReturns a view on the path commands.\nConsumes the builder and returns path commands.\nCreates a PathCommandsBuilder to create path commands.\nReturns the event for a given event ID.\nReturns the event for a given event ID.\nReturns an iterator over the path, with endpoints and …\nReturns an iterator over the events of the path using …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns an iterator over the path commands.\nReturns an iterator over the path commands.\nReturns an iterator over the events of the path using IDs.\nCreates a builder without allocating memory.\nReturns the next event id within the path.\nReturns the next event id within the path.\nReturns the next event id within the sub-path.\nReturns the next event id within the path.\nReturns a view on a path made of these commands with …\nCreates a pre-allocated builder.\nAn iterator that consumes <code>Event</code> iterator and yields …\nAn iterator that consumes an iterator of <code>Point</code>s and …\nAn extension trait for <code>PathEvent</code> iterators.\nApplies a 2D transform to a path iterator and yields the …\nReturns an iterator that turns curves into line segments.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate the iterator.\nCreates a new transformed path iterator from a path …\nReturns an iterator applying a 2D transform to all of its …\nAn angle in radians (f32).\nAlias for <code>euclid::default::Box2D&lt;f32&gt;</code>\nAlias for <code>euclid::default::Point2D&lt;f32&gt;</code>.\nAlias for <code>euclid::default::Rotation2D&lt;f32&gt;</code>\nAlias for <code>euclid::default::Scale&lt;f32&gt;</code>\nAlias for <code>euclid::default::Size2D&lt;f32&gt;</code>.\nAlias for <code>euclid::default::Transform2D&lt;f32&gt;</code>\nAlias for <code>euclid::default::Translation2D&lt;f32&gt;</code>\nAlias for <code>euclid::default::Point2D&lt;f32&gt;</code>.\nAngle in radians\nThe extent of the element in the <code>U</code> units along the <code>y</code> axis …\nShorthand for <code>Point::new(x, y)</code>.\nShorthand for <code>Size::new(x, y)</code>.\nShorthand for <code>Vector::new(x, y)</code>.\nThe extent of the element in the <code>U</code> units along the <code>x</code> axis …\nThe <code>x</code> (traditionally, horizontal) coordinate.\nThe <code>y</code> (traditionally, vertical) coordinate.\nThe default builder for <code>Path</code>.\nA builder for <code>Path</code> with custom attributes.\nAn iterator of endpoint and control point ids for <code>Path</code> and …\nAn iterator for <code>Path</code> and <code>PathSlice</code>.\nAn iterator for <code>Path</code> and <code>PathSlice</code>.\nA simple path data structure.\nA view on a <code>Path</code>.\nAn iterator of over a <code>Path</code> traversing the path in reverse.\nReturns a view on this <code>Path</code>.\nReturns a slice over an endpoint’s custom attributes.\nReturns a slice over an endpoint’s custom attributes.\nCreates a Builder to build a path.\nCreates a BuilderWithAttributes to build a path with …\nReturns the first endpoint and its custom attributes if …\nIterate on a flattened approximation of the path with …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nIterates over the endpoint and control point ids of the …\nIterates over the endpoint and control point ids of the …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nBuilds a <code>Path</code> from This iterator.\nIterates over the entire <code>Path</code>, ignoring custom attributes.\nIterates over the path.\nIterates over the entire <code>Path</code> with custom attributes.\nIterates over the entire <code>Path</code> with custom attributes.\nReturns the last endpoint and its custom attributes if any.\nCreates an Empty <code>Path</code>.\nReturns a reversed version of this path in the form of an …\nReturns a reversed version of this path in the form of an …\nCreates an WithSvg to build a path with a rich set of …\nApplies a transform to all endpoints and control points of …\nA Builder that appends a path to an existing PathBuffer.\nA Builder that appends a path to an existing PathBuffer, …\nIterator over the paths in a <code>PathBufferSlice</code>.\nAn object that stores multiple paths contiguously.\nA view on a <code>PathBuffer</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns whether the path buffer is empty.\nReturns whether the path buffer is empty.\nReturns the number of paths in the path buffer.\nReturns the number of paths in the path buffer.\nA view over a sequence of endpoint IDs forming a polygon.\nAn iterator of <code>Event&lt;EndpointId, ()&gt;</code>.\nAn iterator of <code>PathEvent</code>.\nA view over a sequence of endpoints forming a polygon.\nAn iterator of <code>IdEvent</code> for <code>Polygon</code>.\nAn iterator of <code>Event&lt;&amp;Endpoint, ()&gt;</code>.\nReturns the event for a given event ID.\nReturns the event for a given event ID.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns an iterator of <code>IdEvent</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns an iterator of <code>Event&lt;&amp;T&gt;</code>.\nReturns an iterator of <code>PathEvent</code>.")