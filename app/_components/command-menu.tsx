"use client";

import "react-cmdk/dist/cmdk.css";
import React, { useMemo } from "react";
import CommandPalette, {
  filterItems,
  getItemIndex,
  JsonStructureItem,
  useHandleOpenCommandPalette,
} from "react-cmdk";
import { useState } from "react";
import { categories, components } from "@/lib/emitter/components";
import { getNonEncodedId, transformCategory } from "@/utils";
import { useRouter } from "next/navigation";
import useOpenStore from "@/store/store";
import { contents } from "@/lib/emitter/docs";

export const CommandMenu = () => {
  const [page] = useState<"root" | "projects">("root");
  const { isOpen, setIsOpen } = useOpenStore();
  const [search, setSearch] = useState("");
  const router = useRouter();

  const items = useMemo(() => {
    return categories.map((category) => ({
      heading: transformCategory(category),
      id: category,
      items: components
        .filter((c) => c.metadata.category === category)
        .map((c) => ({
          id: c.metadata.title,
          children: c.metadata.title,
          onClick: () => {
            router.push(`/docs/components/${category}#${getNonEncodedId(c.metadata.title)}`);
          },
        })) as JsonStructureItem[],
    }));
  }, [router]);

  const filteredItems = filterItems(
    [
      {
        heading: "Documentation",
        id: "documentation",
        items: contents.map((c) => ({
          id: c.slugAsParams,
          children: c.name,
          onClick: () => router.push(`/docs/${c.slugAsParams}`),
        })),
      },
      ...items,
    ],
    search
  );

  useHandleOpenCommandPalette(setIsOpen);

  return (
    <CommandPalette
      onChangeSearch={setSearch}
      onChangeOpen={setIsOpen}
      search={search}
      isOpen={isOpen}
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
