"use client";

import "react-cmdk/dist/cmdk.css";
import React, { useMemo } from "react";
import CommandPalette, {
  filterItems,
  getItemIndex,
  useHandleOpenCommandPalette,
} from "react-cmdk";
import { useState } from "react";
import { categories } from "@/lib/emitter";
import { transformCategory } from "@/utils";
import { useRouter } from "next/navigation";

export const CommandMenu = () => {
  const [page] = useState<"root" | "projects">("root");
  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  const items = useMemo(
    () =>
      categories.map((c) => ({
        id: c,
        children: transformCategory(c),

        onClick: () => {
          router.push(`/docs/components/${c}`);
        },
      })),
    [categories]
  );

  const filteredItems = filterItems(
    [
      {
        heading: "Documentation",
        id: "documentation",
        items: [],
      },
      {
        heading: "Components",
        id: "components",
        items,
      },
    ],
    search
  );

  useHandleOpenCommandPalette(setOpen);

  return (
    <CommandPalette
      onChangeSearch={setSearch}
      onChangeOpen={setOpen}
      search={search}
      isOpen={open}
      page={page}
    >
      <CommandPalette.Page id="root">
        {filteredItems.length ? (
          filteredItems.map((list) => (
            <CommandPalette.List key={list.id} heading={list.heading}>
              {list.items.map(({ id, ...rest }) => (
                <CommandPalette.ListItem
                  key={id}
                  index={getItemIndex(filteredItems, id)}
                  {...rest}
                />
              ))}
            </CommandPalette.List>
          ))
        ) : (
          <CommandPalette.FreeSearchAction />
        )}
      </CommandPalette.Page>
    </CommandPalette>
  );
};
