# `dataGithubOrganizationWebhooks` Submodule <a name="`dataGithubOrganizationWebhooks` Submodule" id="@cdktn/provider-github.dataGithubOrganizationWebhooks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubOrganizationWebhooks <a name="DataGithubOrganizationWebhooks" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_webhooks github_organization_webhooks}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DataGithubOrganizationWebhooks(Construct Scope, string Id, DataGithubOrganizationWebhooksConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksConfig">DataGithubOrganizationWebhooksConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksConfig">DataGithubOrganizationWebhooksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGithubOrganizationWebhooks resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubOrganizationWebhooks.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubOrganizationWebhooks.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubOrganizationWebhooks.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubOrganizationWebhooks.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGithubOrganizationWebhooks resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGithubOrganizationWebhooks to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGithubOrganizationWebhooks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_webhooks#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGithubOrganizationWebhooks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.webhooks">Webhooks</a></code> | <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksList">DataGithubOrganizationWebhooksWebhooksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Webhooks`<sup>Required</sup> <a name="Webhooks" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.webhooks"></a>

```csharp
public DataGithubOrganizationWebhooksWebhooksList Webhooks { get; }
```

- *Type:* <a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksList">DataGithubOrganizationWebhooksWebhooksList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooks.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubOrganizationWebhooksConfig <a name="DataGithubOrganizationWebhooksConfig" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DataGithubOrganizationWebhooksConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_webhooks#id DataGithubOrganizationWebhooks#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_webhooks#id DataGithubOrganizationWebhooks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubOrganizationWebhooksWebhooks <a name="DataGithubOrganizationWebhooksWebhooks" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DataGithubOrganizationWebhooksWebhooks {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubOrganizationWebhooksWebhooksList <a name="DataGithubOrganizationWebhooksWebhooksList" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DataGithubOrganizationWebhooksWebhooksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksList.get"></a>

```csharp
private DataGithubOrganizationWebhooksWebhooksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGithubOrganizationWebhooksWebhooksOutputReference <a name="DataGithubOrganizationWebhooksWebhooksOutputReference" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DataGithubOrganizationWebhooksWebhooksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.property.active">Active</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooks">DataGithubOrganizationWebhooksWebhooks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.property.active"></a>

```csharp
public IResolvable Active { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooksOutputReference.property.internalValue"></a>

```csharp
public DataGithubOrganizationWebhooksWebhooks InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-github.dataGithubOrganizationWebhooks.DataGithubOrganizationWebhooksWebhooks">DataGithubOrganizationWebhooksWebhooks</a>

---



