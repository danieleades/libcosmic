// Copyright 2022 System76 <info@system76.com>
// SPDX-License-Identifier: MPL-2.0

pub mod item;
pub mod section;

pub use self::item::{flex_item, flex_item_row, item, item_row};
pub use self::section::{section, Section};

use crate::widget::{column, Column};
use crate::{theme, Element};

/// A column with a predefined style for creating a settings panel
#[must_use]
pub fn view_column<Message: 'static>(children: Vec<Element<Message>>) -> Column<Message> {
    column::with_children(children).spacing(theme::active().cosmic().space_m())
}
